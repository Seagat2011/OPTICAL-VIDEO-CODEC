
//var bit = ['0','1']
var platform = 8//64//3//8//32
//var MAX_RESOLUTION = Math.pow(2,32)
var g_nPattern = []
var re_stack = [
  '',
  '\\d',
  '0','1',
  '(',')',
  '+','|','[',']','^',  
  '\\1','\\2','\\3','\\4','\\5','\\6','\\7','\\8','\\9',
]
var _16K_RegExp_string = {}
var pad = []
var g_cache = {}

for(var i=1;i<=platform;i++){
  pad.push(i)
}

function padZero(n){
  var result = ""
  while(n-->0){
    result += '0'
  }
  return result
}

function gen_pattern(i){
  var nMAX = Math.pow(2,i)
  var w = 0
  while(w<nMAX){ 
    var u = w.toString(2)
    g_nPattern.push(u)
    w++
  }
}

function re_stack_func(i,w){
  var j=0
  var i=0
  var n=0
  var u=[]
  var offset = platform-1
  var k = platform-1
  var k_reset = platform-1
  var add_carry = false
  var state_machine = { 
    expand_stack : true,
    init_stack_pointers : true, 
    build_cache : false,
    end_program : false,
    }
  while(1){
    if(state_machine.expand_stack){
      re_stack.push('{'+i+','+(j++)+'}')
      if(j>=platform){
        j=++i
        if(i>=platform){
          //break
          state_machine.expand_stack = false
        }
      }
    } // expand_stack
    if(state_machine.init_stack_pointers){
      if(n++<platform){
        u.push(0)
      }
      else{
        state_machine.init_stack_pointers = false
        state_machine.build_cache = true
      }
    } // init_stackpointers 
    if(state_machine.build_cache){
      if(add_carry){
        if(u[k-offset]!=null){
          u[k-offset]++
          if(u[0]>k_reset){
            //break
            state_machine.build_cache = false
            state_machine.end_program = true
          }
          else
          if(u[k-offset]>k){
            u[k-offset] = 0
            offset--
          }
          else{
            add_carry = false
          }
        }
      }
      else{
        w = w + re_stack[u[k--]]
        if(!(w in g_cache)){
          g_cache[w] = 1
        }
        if(k<0){
          k = k_reset
          u[k]++
          if(u[k]>k_reset){
            u[k] = 0
            add_carry = true
          }
        }
      }
    }// build_cache
    if(state_machine.end_program){
      break
    }
  }// loop forever
}

function re_test(){
  for(var w in g_cache){
    if(g_cache.hasOwnProperty(w)){
      try{
        var pat = []
        var accept
        var re = new RegExp('^'+w+'$')
        //console.log("analyzing",re)
        g_nPattern.map(function(pttn,i){
          if(pttn.match(re)){
            pat.push(pttn)
          }
          return pttn
        })
        if(pat.length){
          var accept = pat.join('|')
          if(!_16K_RegExp_string[accept]){
            _16K_RegExp_string[accept] = re
            //console.log("New pattern found! "+re)
          }
          else
          if(re.source.length<_16K_RegExp_string[accept].source.length){
            //console.log("Optimizing pattern "+_16K_RegExp_string[accept]+'=>'+re)
           _16K_RegExp_string[accept] = re
          }
        }
      }
      catch(e){
        
      }
    }
  }
}

addEventListener("message",myFunc,"16K_codec.htm")

// Use a NNET to determine RegExp string //
function myFunc(e){
  var err = []
  console.log("16K_encode_RegExp_Worker::myFunc")
  if(e.data.src == "kmap"){
    if(!g_nPattern.length){
      gen_pattern(platform)
    }
    re_stack_func(0,"")
    re_test()
    //console.log(g_nPattern)
    var p1 = []
    for(var i in _16K_RegExp_string){
      if(_16K_RegExp_string.hasOwnProperty(i)){
        p1.push('"'+i.toString()+"\":"+_16K_RegExp_string[i].toString())
      }
    }
    p1 = p1.join(',\n')//*/
    var p0 = ((err.length)?err.join('\n')+"\n":"")
    var msg = p0+p1
    postMessage({tgt:"kmap",param_stack:msg})
  }
}

console.log("16K_encode_RegExp_Worker : Ready")