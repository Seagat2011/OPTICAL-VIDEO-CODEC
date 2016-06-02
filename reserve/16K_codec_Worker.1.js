
addEventListener("message",myFunc,"16K_codec.htm")

// Use a NNET to determine RegExp string //
function myFunc(e){
  var err = []
  console.log("16K_codec_Worker::myFunc")
  if(e.data.src == "kmap"){
    var stack = e.data.stack
    postMessage({tgt:"kmap",param_stack:stack})
  }
}

console.log("16K_codec_Worker - Ready")