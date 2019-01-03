// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var element = document.body;
  var output = [];
  
  var helperFunction = function(node) {
    if(node.classList.contains(className)){
      output.push(node);
    }
    for(var i = 0; i < node.childNodes.length; i++){
      //if the nodeName is '#text" if might have another '#text' within it. So, we are calling it recursively. 
      if(node.childNodes[i].nodeName !=='#text'){
        helperFunction(node.childNodes[i]);
      }
    }
  }
  helperFunction(element);
  return output;
};
