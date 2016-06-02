
var g_stack = []
var g_primesUp2N = []

Math.__proto__.primeN = function(n){
  var ret = -1
  if(n in g_stack){
    ret = g_stack[n]
  }
  return ret
}

function stripMultiples(a,w){
  return a.map(function(v,i,me){
    me[i*w] = 1
    return v
  })
}

Math.__proto__.primesUp2N = function(n){
  var ret = []
  var stack = []
  for (var i=0;i<1e4;i++){
    stack[i]=1
  }
  stack.map(
    function(z,i,me){
      for(var v=0;v<me.length;v++){
        var w = i*v
        if(w in me){
          ++me[w]
        }
      }
    }
  )
  if(!g_stack.length){
    g_stack = stack.slice(0)
  }
  stack.map(
    function(v,i){
      if(v<4 && --n>-1){
        ret.push(i)
      }
      return v
    }
  )
  return ret
}

Math.__proto__.isPrime = function(n){
  return (n in g_stack) && (g_stack[n] < 4)
}

addEventListener("message",myFunc,"primes.htm")

function myFunc(e){
  var NMax = e.data.NMax
  var N = e.data.N
  var f = e.data.func
  if(!g_primesUp2N.length){
    g_primesUp2N = Math.primesUp2N(NMax)
  }
  var status = {
    "Math.primeN":function(r){ 
      var primeN = Math.primeN(r) 
      postMessage({tgt:"pgen",primeN:primeN})
      },
    "Math.primesUp2N":function(r){ 
      postMessage({tgt:"pgen",primesUp2N:g_primesUp2N})
      },
    "Math.isPrime":function(r){ 
      var isPrime = Math.isPrime(r) 
      postMessage({tgt:"pgen",isPrime:isPrime})
      },
  }
  status[f](N) || Error("Web Worker::primes_Worker - init failed")
}