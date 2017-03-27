// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var stringified = '';

  if (obj === null) {
    return 'null';
  

  } else if (Array.isArray(obj)) {
    var arr = [];
    if (obj.length === 0) {
      return '[]';
    
    } else {
      obj.forEach(function(item) {
        arr.push(stringifyJSON(item));
      });
    }
    stringified += '[' + arr + ']';
  

  } else if (typeof obj === 'object') {
    var objHolder = [];
    
    if (Object.keys(obj).length === 0) {
      return '{}';
    
    } else {
      for (var key in obj) {
        if (obj[key] === undefined || typeof obj[key] === 'function') {
          return '{}';
        } else {
          objHolder.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }
      stringified += '{' + objHolder.join(',') + '}';
    }
  

  } else if (typeof obj === 'string') {
    return '"' + obj + '"'; 
  

  } else {
    return String(obj);
  }

  return stringified;
 
};

