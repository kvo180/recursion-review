// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var stringified = '';
  //if obj is array
  if (Array.isArray(obj)) {
    var arr = [];
    if (obj.length === 0) {
      return '[]';
    } else {
      obj.forEach(function(item) {
        return arr.push(stringifyJSON(item));
      });
    }
    stringified += '[' + arr + ']';
  
  } else if (typeof obj === 'string') {
    return '"' + obj + '"'; 
  } else if (obj === null) {
    return 'null';
  
  } else {
    return String(obj);
  }

  
  //if the array is empty
   //return empty brackets
  //iterate through array 
   //stringify on each element
 //if obj is object
  //if obj is empty 
   //retur brackets
  //else iterate through object stringifying values
   // if undefined || is fcuntion
    // return {}
  return stringified;
 
};

var t = [1, 2, true, 'helo'];

console.log(stringifyJSON(t));

/*
9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
];


unstringifiableValues = [
  {
    'functions': function() {},
    'undefined': undefined
  }
];
*/

