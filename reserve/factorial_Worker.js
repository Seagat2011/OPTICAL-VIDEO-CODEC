
var g_lookup = {}

Object.prototype.toHex = function(){
  return '0x'+this.toString(16)
}

Object.prototype.toBin = function(){
  return this.toString(2)
}

Math.__proto__.factorial = function(n){
  var ret = 1
  if(n>1){
    ret = n*this.factorial(n-1)
  }
  return ret
}

Math.__proto__.stringOP = function(op,l,r){
  var status = {
    "add":function(lhs,rhs){},
    "sub":function(lhs,rhs){},
    "div":function(lhs,rhs){},
    "pow":function(lhs,rhs){},
    "mul":function(lhs,rhs){
      var row = rhs.length <= lhs.length ? lhs : rhs
      var col = rhs.length <= lhs.length ? rhs : lhs
      var ret = []
      var tmp = []
      var k = 0
      col.map(function(v,i){
        row.map(function(w,j){
          if(!tmp[i+j]){
            tmp[i+j] = 0
          }
          tmp[i+j] += v * w
          return w
        })
        return v
      })
      tmp.map(function(u,i,me){
        if(u>9){
          var w = u
          u = Math.floor(u%10)
          if(!ret[i+1]){
            ret[i+1] = 0
          }
          ret[i+1] += Math.floor(w/10%10)
        }
        if(i in ret && (ret[i]+u)>9){
          var w = ret[i] + u
          ret[i] = Math.floor(w%10)
          if(!ret[i+1]){
            ret[i+1] = 0
          }
          ret[i+1] += Math.floor(w/10%10)
        }
        else
        if(i in ret){
          ret[i] += u
        }
        else{
          ret[i] = u        
        }
      })
      return ret
    },
  }
  return status[op](l,r) || Error("Math::stringOP failed ",op,l,r)
}

Math.__proto__.factorialSt = function(n){
  var ret = [1]
  if(n>1){
    var g_lookup = this.g_lookup
    var w = n.toString()
    if (g_lookup[w]){
      ret = g_lookup[w]    
    }
    else{
      ret = n.toString().split('').reverse()
      for(var i=n-1;i>0;i--){
        var n2 = i.toString()
        if(g_lookup[n2]){
          ret = this.stringOP('mul', ret, g_lookup[n2])
          break
        }
        else{
          n2 = n2.split('').reverse()
          ret = this.stringOP('mul', ret, n2)// [0] => LSB
        }
      }
      g_lookup[w] = ret
    }
  }
  return ret
}

Math.__proto__.factorialAsUint8Array = function(n){
  var ret = this.factorialSt(n)
  return ret
}

Math.__proto__.factorialAsByteArray = function(n){
  var ret = this.factorialSt(n).map(function(u){
    return u.toHex()
  })
  return ret
}

Math.__proto__.factorialAsUintBinArray = function(n){
  var ret = this.factorialSt(n).map(function(u){
    return u.toBin()
  })
  return ret
}

Math.__proto__.factorialsUp2N = function(n){
  this.g_lookup = {}
  var ret = []
  for(var i=0;i<n;i++){
    var dec = this.factorialAsUint8Array(i)
    ret.push({
      pid:i,
      encode:i.toBin(),
      num:this.factorial(i),
      dec_len:dec.length,
      dec:dec,
      hex:this.factorialAsByteArray(i),
      decode:this.factorialAsUintBinArray(i),//.join(''),
    })
  }
  return ret
}

addEventListener("message",myFunc,"factorial_tables_generator.htm")

function myFunc(e){
  var status = {
    "Math.factorialsUp2N":function(params){
      postMessage({src:"Math.factorialsUp2N",factorialsUp2N:Math.factorialsUp2N(params.value)})
    },
  }
  status[e.data.tgt](e.data) || Error("factorial_Worker::myFunc failed",e.data)
}