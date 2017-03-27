// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  var nodes = document.body;

  var collectElements = function(node) {
    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }

    if (node.childNodes) {
      node.childNodes.forEach(function(child){
        if (child) {
          collectElements(child);
        }
      }); 
    }   
  };

  collectElements(nodes);

  return results;
};

// document.body, element.childNodes, and element.classList
