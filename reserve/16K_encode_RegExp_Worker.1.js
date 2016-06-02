
var oscpu
var depth = 1
var resolution
var base
var sTally = 0
var g_nPattern
var _16K_RegExp_string = {}
var g_cache0 = {}
var g_cache1 = {}
var g_cache2 = {}
var g_cache3 = {}
var g_cache4 = {}
var g_cache5 = {}
var g_cache6 = {}
var g_cache7 = {}
var g_cache8 = {}
var re_stack = [
'0','1','+','|','(',')','\\1','^','\\d',
]

function bGEN(n){
  var N = Math.pow(2,n)
  var result = []
  var i=0
  while(i<N){
    result.push(i.toString(2))
    i++
  }
  return result
}
    
function re_stack_func(i,u,w){ // w param is for test only and is already part of u
  try{
    var var_0 = u + re_stack[0]
    var result = []
    try{
      var re = new RegExp('^'+var_0+'$')
      if(!(re in g_cache0)){
        g_cache0[re] = 1
        g_nPattern.map(function(w){
          if(w.match(re)){
            result.push(w)
          }
          return w
        })
        if(result.length){
          var expr = result.join('|')
          if(expr && !(expr in _16K_RegExp_string)){
            sTally++
            g_cache0[re] = sTally
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+',\t// '+sTally)})
            _16K_RegExp_string[expr] = re
          }
          else
          if(re.source.length < _16K_RegExp_string[expr].source.length){
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+', // delete '+g_cache0[_16K_RegExp_string[expr]]+
            ': '+'optimize '+_16K_RegExp_string[expr].toString()+' --> '+re.toString())})
            _16K_RegExp_string[expr] = re
          }
        }
      }
    }
    catch(e){
    
    }
    if(i+1<depth){
      re_stack_func(i+1,var_0,re_stack[0])
    }
  }
  catch(e){

  }  
  try{ 
    var var_1 = u + re_stack[1]
    var result = []
    try{
      var re = new RegExp('^'+var_1+'$')
      if(!(re in g_cache0)){
        g_cache0[re] = 1
        g_nPattern.map(function(w){
          if(w.match(re)){
            result.push(w)
          }
          return w
        })
        if(result.length){
          var expr = result.join('|')
          if(expr && !(expr in _16K_RegExp_string)){
            sTally++
            g_cache0[re] = sTally
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+',\t// '+sTally)})
            _16K_RegExp_string[expr] = re
          }
          else
          if(re.source.length < _16K_RegExp_string[expr].source.length){          
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+', // delete '+g_cache0[_16K_RegExp_string[expr]]+
            ': '+'optimize '+_16K_RegExp_string[expr].toString()+' --> '+re.toString())})
            _16K_RegExp_string[expr] = re
          }
        }
      }
    }
    catch(e){
    
    }
    if(i+1<depth){
      re_stack_func(i+1,var_1,re_stack[1])
    }
  }
  catch(e){

  }  
  try{  
    var var_2 = u + re_stack[2]
    var result = []
    try{
      var re = new RegExp('^'+var_2+'$')
      if(!(re in g_cache0)){
        g_cache0[re] = 1
        g_nPattern.map(function(w){
          if(w.match(re)){
            result.push(w)
          }
          return w
        })
        if(result.length){
          var expr = result.join('|')
          if(expr && !(expr in _16K_RegExp_string)){
            sTally++
            g_cache0[re] = sTally
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+',\t// '+sTally)})
            _16K_RegExp_string[expr] = re
          }
          else
          if(re.source.length < _16K_RegExp_string[expr].source.length){        
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+', // delete '+g_cache0[_16K_RegExp_string[expr]]+
            ': '+'optimize '+_16K_RegExp_string[expr].toString()+' --> '+re.toString())})
            _16K_RegExp_string[expr] = re
          }
        }
      }
    }
    catch(e){
    
    }
    if(i+1<depth){
      re_stack_func(i+1,var_2,re_stack[2])
    }
  }
  catch(e){

  }  
  try{
    var var_3 = u + re_stack[3]
    var result = []
    try{
      var re = new RegExp('^'+var_3+'$')
      if(!(re in g_cache0)){
        g_cache0[re] = 1
        g_nPattern.map(function(w){
          if(w.match(re)){
            result.push(w)
          }
          return w
        })
        if(result.length){
          var expr = result.join('|')
          if(expr && !(expr in _16K_RegExp_string)){
            sTally++
            g_cache0[re] = sTally
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+',\t// '+sTally)})
            _16K_RegExp_string[expr] = re
          }
          else
          if(re.source.length < _16K_RegExp_string[expr].source.length){           
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+', // delete '+g_cache0[_16K_RegExp_string[expr]]+
            ': '+'optimize '+_16K_RegExp_string[expr].toString()+' --> '+re.toString())})
            _16K_RegExp_string[expr] = re
          }
        }
      }
    }
    catch(e){
    
    }
    if(i+1<depth){
      re_stack_func(i+1,var_3,re_stack[3])
    }
  }
  catch(e){

  }  
  try{  
    var var_4 = u + re_stack[4]
    var result = []
    try{
      var re = new RegExp('^'+var_4+'$')
      if(!(re in g_cache0)){
        g_cache0[re] = 1
        g_nPattern.map(function(w){
          if(w.match(re)){
            result.push(w)
          }
          return w
        })
        if(result.length){
          var expr = result.join('|')
          if(expr && !(expr in _16K_RegExp_string)){
            sTally++
            g_cache0[re] = sTally
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+',\t// '+sTally)})
            _16K_RegExp_string[expr] = re
          }
          else
          if(re.source.length < _16K_RegExp_string[expr].source.length){             
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+', // delete '+g_cache0[_16K_RegExp_string[expr]]+
            ': '+'optimize '+_16K_RegExp_string[expr].toString()+' --> '+re.toString())})
            _16K_RegExp_string[expr] = re
          }
        }
      }
    }
    catch(e){
    
    }
    if(i+1<depth){
      re_stack_func(i+1,var_4,re_stack[4])
    }
  }
  catch(e){

  }  
  try{  
    var var_5 = u + re_stack[5]
    var result = []
    try{
      var re = new RegExp('^'+var_5+'$')
      if(!(re in g_cache0)){
        g_cache0[re] = 1
        g_nPattern.map(function(w){
          if(w.match(re)){
            result.push(w)
          }
          return w
        })
        if(result.length){
          var expr = result.join('|')
          if(expr && !(expr in _16K_RegExp_string)){
            sTally++
            g_cache0[re] = sTally
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+',\t// '+sTally)})
            _16K_RegExp_string[expr] = re
          }
          else
          if(re.source.length < _16K_RegExp_string[expr].source.length){            
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+', // delete '+g_cache0[_16K_RegExp_string[expr]]+
            ': '+'optimize '+_16K_RegExp_string[expr].toString()+' --> '+re.toString())})
            _16K_RegExp_string[expr] = re
          }
        }
      }
    }
    catch(e){
    
    }
    if(i+1<depth){
      re_stack_func(i+1,var_5,re_stack[5])
    }
  }
  catch(e){

  } 
  try{  
    var var_6 = u + re_stack[6]
    var result = []
    try{
      var re = new RegExp('^'+var_6+'$')
      if(!(re in g_cache0)){
        g_cache0[re] = 1
        g_nPattern.map(function(w){
          if(w.match(re)){
            result.push(w)
          }
          return w
        })
        if(result.length){
          var expr = result.join('|')
          if(expr && !(expr in _16K_RegExp_string)){
            sTally++
            g_cache0[re] = sTally
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+',\t// '+sTally)})
            _16K_RegExp_string[expr] = re
          }
          else
          if(re.source.length < _16K_RegExp_string[expr].source.length){            
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+', // delete '+g_cache0[_16K_RegExp_string[expr]]+
            ': '+'optimize '+_16K_RegExp_string[expr].toString()+' --> '+re.toString())})
            _16K_RegExp_string[expr] = re
          }
        }
      }
    }
    catch(e){
    
    }
    if(i+1<depth){
      re_stack_func(i+1,var_6,re_stack[6])
    }
  }
  catch(e){

  } 
  try{  
    var var_7 = u + re_stack[7]
    var result = []
    try{
      var re = new RegExp('^'+var_7+'$')
      if(!(re in g_cache0)){
        g_cache0[re] = 1
        g_nPattern.map(function(w){
          if(w.match(re)){
            result.push(w)
          }
          return w
        })
        if(result.length){
          var expr = result.join('|')
          if(expr && !(expr in _16K_RegExp_string)){
            sTally++
            g_cache0[re] = sTally
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+',\t// '+sTally)})
            _16K_RegExp_string[expr] = re
          }
          else
          if(re.source.length < _16K_RegExp_string[expr].source.length){           
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+', // delete '+g_cache0[_16K_RegExp_string[expr]]+
            ': '+'optimize '+_16K_RegExp_string[expr].toString()+' --> '+re.toString())})
            _16K_RegExp_string[expr] = re
          }
        }
      }
    }
    catch(e){
    
    }
    if(i+1<depth){
      re_stack_func(i+1,var_7,re_stack[7])
    }
  }
  catch(e){

  } 
  try{  
    var var_8 = u + re_stack[8]
    var result = []
    try{
      var re = new RegExp('^'+var_8+'$')
      if(!(re in g_cache0)){
        g_cache0[re] = 1
        g_nPattern.map(function(w){
          if(w.match(re)){
            result.push(w)
          }
          return w
        })
        if(result.length){
          var expr = result.join('|')
          if(expr && !(expr in _16K_RegExp_string)){
            sTally++
            g_cache0[re] = sTally
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+',\t// '+sTally)})
            _16K_RegExp_string[expr] = re
          }
          else
          if(re.source.length < _16K_RegExp_string[expr].source.length){            
            postMessage({tgt:"kmap",log:('"'+expr+'":'+re.toString()+', // delete '+g_cache0[_16K_RegExp_string[expr]]+
            ': '+'optimize '+_16K_RegExp_string[expr].toString()+' --> '+re.toString())})
            _16K_RegExp_string[expr] = re
          }
        }
      }
    }
    catch(e){
    
    }
    if(i+1<depth){
      re_stack_func(i+1,var_8,re_stack[8])
    }
  }
  catch(e){

  }
}

addEventListener("message",myFunc,"16K_codec.htm")

// Use a NNET to determine RegExp //
function myFunc(e){
  console.log("16K_encode_RegExp_Worker::myFunc")
  if(e.data.src == "kmap"){

    oscpu = e.data.stack
    base = Math.pow(2,e.data.stack)
    g_nPattern = bGEN(e.data.stack)
    
    resolution = Math.pow(2,base)-1
    var sbuf =     
    "re_stack_func(0,re_stack[1],re_stack[1])\n"+  
    "re_stack_func(0,re_stack[4],re_stack[4])\n"+
    "re_stack_func(0,re_stack[7],re_stack[7])\n"+ 
    "re_stack_func(0,re_stack[0],re_stack[0])\n"+
    "depth +=1\n"
    for(var i=0;i<14;i++){
      sbuf += sbuf
    }
    postMessage({tgt:"kmap",log:('{\nlength:'+resolution+',')})
    while(sTally<resolution){
    eval(sbuf)
    }
    console.log('final depth',depth)
  }
}

console.log("16K_encode_RegExp_Worker : Ready")