
var resolution = 4 //8//64//3//8//32//N bits
var overhead = resolution * Math.pow(2,resolution)+2*Math.pow(2,resolution)-1 // worst case: all n-bit tuples + RegExp separators -- all in parens
var g_nPattern = []
var re_stack = [
'0','1','+','|','(',')',
/*
  '(',')',
  '|','[',']','^',
  '+',
  '\\d',
  '0','1','\\1',
  */
]
var pstack = 0
var bstack = 0
var grammar_is_allowed = {
  valid_anchor:{'0':1,'1':1,'(':1,
  //'[':1,
  },
  set_anchor:{
    '0':function(){},
    '1':function(){},
    '(':function(){if(!pstack){pstack++}},
    //'[':function(){if(!bstack){bstack++}},
    },
  reset_scope:function(){pstack=bstack=0},
  will_compile:function(){return (pstack == bstack == 0)},
  '0':{
    '0':function(){return true},
    '1':function(){return true},
    /*
    '(':function(v){var result=true;if(pstack){result=false}else if(!v && !pstack){pstack++;}return result},
    ')':function(v){var result=true;if(pstack-1<0){result=false}else if(!v){pstack--}return result},
    '[':function(v){if(!v){bstack++;}return true},
    ']':function(v){var result=true;if(bstack-1<0){result=false}else if(!v){bstack--}return result},
    */
    '+':function(){return true},
    '|':function(){return true},
    /*
    '\\1':function(){var result=true;if(pstack!=0){result=false}return result},
    '\\d':function(){return true},
    */
    },
  '1':{
    '0':function(){return true},
    '1':function(){return true},
    '(':function(v){var result=true;if(pstack){result=false}else if(!v && !pstack){pstack++;}return result},
    ')':function(v){var result=true;if(pstack-1<0){result=false}else if(!v){pstack--}return result},
    //'[':function(v){if(!v){bstack++;}return true},
    //']':function(v){var result=true;if(bstack-1<0){result=false}else if(!v){bstack--}return result},
    '+':function(){return true},
    '|':function(){return true},
    //'\\1':function(){var result=true;if(pstack!=0){result=false}return result},
    //'\\d':function(){return true},
    },
    /*
  '\\d':{
    '0':function(){return true},
    '1':function(){return true},
    '(':function(v){var result=true;if(pstack){result=false}else if(!v && !pstack){pstack++;}return result},
    ')':function(v){var result=true;if(pstack-1<0){result=false}else if(!v){pstack--}return result},
    '[':function(v){if(!v){bstack++;}return true},
    ']':function(v){var result=true;if(bstack-1<0){result=false}else if(!v){bstack--}return result},
    '+':function(){return true},
    '|':function(){return true},
    '\\1':function(){var result=true;if(pstack!=0){result=false}return result},
    '\\d':function(){return true},
    },
  '\\1':{
    '0':function(){return true},
    '1':function(){return true},
    '(':function(v){var result=true;if(pstack){result=false}else if(!v && !pstack){pstack++;}return result},
    ')':function(){return false},
    '[':function(v){if(!v){bstack++;}return true},
    ']':function(v){var result=true;if(bstack-1<0){result=false}else if(!v){bstack--}return result},
    '+':function(){return true},
    '|':function(){return true},
    '\\1':function(){var result=true;if(pstack!=0){result=false}return result},
    '\\d':function(){return true},
    },
    */
  '(':{
    '0':function(){return true},
    '1':function(){return true},
    '(':function(v){var result=true;if(pstack){result=false}else if(!v && !pstack){pstack++;}return result},
    //'[':function(v){if(!v){bstack++;}return true},
    //'\\1':function(){return false},
    //'\\d':function(){return true},
    },
  ')':{
    '0':function(){return true},
    '1':function(){return true},
    '(':function(v){var result=true;if(pstack){result=false}else if(!v && !pstack){pstack++;}return result},
    //'[':function(v){if(!v){bstack++;}return true},
    '+':function(){return true},
    //'\\1':function(){var result=true;if(pstack!=0){result=false}return result},
    //'\\d':function(){return true},
    },
    /*
  '[':{
    '0':function(){return true},
    '1':function(){return true},
    '^':function(){return true},
    '\\1':function(){var result=true;if(pstack!=0){result=false}return result},
    '\\d':function(){return true},
    },
  ']':{
    '0':function(){return true},
    '1':function(){return true},
    '+':function(){return true},
    ')':function(v){var result=true;if(pstack-1<0){result=false}else if(!v){pstack--}return result},
    '|':function(){return true},
    '\\1':function(){var result=true;if(pstack!=0){result=false}return result},
    '\\d':function(){return true},
    },
    */
  '+':{
    '0':function(){return true},
    '1':function(){return true},
    '(':function(v){var result=true;if(pstack){result=false}else if(!v && !pstack){pstack++;}return result},
    ')':function(v){var result=true;if(pstack-1<0){result=false}else if(!v){pstack--}return result},
    '|':function(){return true},
    //'\\1':function(){var result=true;if(pstack!=0){result=false}return result},
    //'\\d':function(){return true},
    },
    /*
  '^':{
    '0':function(){return true},
    '1':function(){return true},
    '\\1':function(){var result=true;if(pstack!=0){result=false}return result},
    '\\d':function(){return true},
    },
    */
  '|':{
    '0':function(){return true},
    '1':function(){return true},
    '(':function(v){var result=true;if(pstack){result=false}else if(!v && !pstack){pstack++;}return result},
    //'[':function(v){if(!v){bstack++;}return true},
    //'\\1':function(){var result=true;if(pstack!=0){result=false}return result},
    //'\\d':function(){return true},
    },
}

var _16K_RegExp_string = {}
var g_cache = {}
var g_oldcache = {}
var base = Math.pow(2,resolution)
var regexp_val_array = base + Math.pow(2,base) // pattern + NFA combos
var regexp_tally = 0
var achieved_regexp_tally_target = function(n){
  var result = false
  var nlen = n
  var tarlen = regexp_val_array
  if(nlen>=tarlen){
    result=true
  }
  return result
}

function re_stack_func(){
  var w = ''
  var j=1
  var i=1
  var n=0
  var u=[]
  var u_reset = 0
  var offset = 0
  var offset_reset = offset+1
  var k = 0
  var k_reset = overhead-1 
  var add_carry = false
  var nMAX = Math.pow(2,resolution)
  var m = 0
  var re_reset
  var pattern
  var pattern_i = 0
  var re
  var pat = []
  var accept
  var state_machine = {
    gen_pattern : true,
    expand_stack : true,
    init_stack_pointers : true, 
    build_cache : true,
    parse_cache : true,
    parse_cache_continue : true,
    load_pattern : false,
    end_program : false,
    }
  while(1){
    if(state_machine.gen_pattern){
      if(m<nMAX){
        g_nPattern.push(m.toString(2))
        m++
      }
      else{
        state_machine.gen_pattern = false
      }
    }
    /*
    if(state_machine.expand_stack){
      if(i==j){
       re_stack.push('{'+i+',}')
      }
      re_stack.push('{'+i+','+(j++)+'}')
      if(j>=resolution){
        j=++i
        if(i>=resolution){
          //break
          state_machine.expand_stack = false
        }
      }
    } // expand_stack
    */
    if(state_machine.init_stack_pointers){
      if(n++<overhead){
        u.push(0)
      }
      else{
        state_machine.init_stack_pointers = false
      }
    } // init_stackpointers 
    if(state_machine.build_cache){
      re_reset = re_stack.length-1
      if(add_carry){
        u[offset]++
        if(u[k_reset]>re_reset){
          state_machine.build_cache = false
        }
        else
        if(u[offset]>re_reset){
          u[offset] = u_reset
          if(offset<k_reset){
            offset++
          }
          else{
            add_carry = false
          }
        }
        else{
          offset = offset_reset
          add_carry = false
        }
      }
      else{
        try{
          if(k==0 && grammar_is_allowed.valid_anchor[re_stack[u[k]]] ||
            (k>0 && grammar_is_allowed[re_stack[u[k-1]]][re_stack[u[k]]]('test')) ){
            if(k==0){
              grammar_is_allowed.set_anchor[re_stack[u[k]]] ()
            }
            else{
              grammar_is_allowed[re_stack[u[k-1]]][re_stack[u[k]]] ()
            }
            w = w + re_stack[u[k]]
            if(w && !(w in g_cache) && !(w in g_oldcache)){
              g_cache[w] = 1
              if(!state_machine.parse_cache){
                state_machine.parse_cache = true
                state_machine.parse_cache_continue = true
              }
            }
          }
        }
        catch(e){
          //console.log(e,re_stack[u[k-1]],re_stack[u[k]])
        }
        k++
        if(k>k_reset){
          grammar_is_allowed.reset_scope ()
          w = ''
          k = 0
          u[0]++
          if(u[0]>re_reset){
            u[0] = u_reset
            offset = offset_reset
            add_carry = true
          }
        }
      }
    }// build_cache
    if(state_machine.parse_cache){
      if(state_machine.parse_cache_continue){
        for(var reblob in g_cache){
          if(g_cache.hasOwnProperty(reblob)){
            try{
              re = new RegExp('^'+reblob+'$')
              delete g_cache[reblob]
              g_oldcache[reblob] = 1
              state_machine.parse_cache_continue = false
              state_machine.load_pattern = true
              break
            }
            catch(e){
              delete g_cache[reblob]
              g_oldcache[reblob] = 1
              state_machine.parse_cache_continue = true
              state_machine.load_pattern = false
              re = null
            }
          }
        }
      }
      if(state_machine.load_pattern){
        try{
          pattern = g_nPattern[pattern_i]
          pattern_i++
        }
        catch(e){
          pattern = null
        }
      }
      if(pattern && re){
        if(pattern.match(re)){
          pat.push(pattern)
        }      
        if(state_machine.load_pattern == false){
          state_machine.load_pattern = true
        }
        pattern = null
      }
      if(pattern_i>=g_nPattern.length){
        if(pat.length && !state_machine.gen_pattern){
          accept = pat.join('|')
          if(!_16K_RegExp_string[accept]){
              console.log(regexp_tally++,accept+re.toString())
            _16K_RegExp_string[accept] = re
            if(achieved_regexp_tally_target(regexp_tally)){
              state_machine.parse_cache = false
              state_machine.end_program = true
            }
          }
          else
          if(re.source.length<_16K_RegExp_string[accept].source.length){
            console.log('optimize...',_16K_RegExp_string[accept].toString()+' --> '+re.toString())
           _16K_RegExp_string[accept] = re
          }
        }
        pattern_i = 0
        re = null
        pattern = null
        accept = null
        pat = []
        if(g_cache && state_machine.parse_cache_continue == false){
          state_machine.parse_cache_continue = true    
        }
        if(state_machine.load_pattern == false){
          state_machine.load_pattern = true
        }
      }
    } // parse_cache
    if(state_machine.end_program){
      break
    } // end_program
  }// wloop 
}

addEventListener("message",myFunc,"16K_codec.htm")

// Use a NNET to determine RegExp string //
function myFunc(e){
  var err = []
  console.log("16K_encode_RegExp_Worker::myFunc")
  if(e.data.src == "kmap"){
    re_stack_func()
    var p1 = []
    for(var i in _16K_RegExp_string){
      if(_16K_RegExp_string.hasOwnProperty(i)){
        p1.push('"'+i.toString()+"\":"+_16K_RegExp_string[i].toString())
      }
    }
    p1 = p1.join(',\n')
    var p0 = ((err.length)?err.join('\n')+"\n":"")
    var msg = p0+p1
    postMessage({tgt:"kmap",param_stack:msg})
  }
}

console.log("16K_encode_RegExp_Worker : Ready")