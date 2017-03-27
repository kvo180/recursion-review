// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
/*
var parseJSON = function(json) {

var parseObj = function(obj) {
    var parsedObj = {};

    for (var i = 0; i < obj.length; i++) {

    }
}

var parseArr = function(arr) {
    var parsedArr = [];

    for (var i = 0; i < arr.length; i++) {
        
    }
}

var parseValue = function(val) {

}


var isObject = json.charAt(0) === '{' && json.charAt(json.length-1) === '}';

if (isObject) {
parseObj(json);
} else {
parseArr(json);
}

};
*/