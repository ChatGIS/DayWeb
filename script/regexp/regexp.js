console.log('进入regexp.js');

var pattern = /s$/
var pattern_new = new RegExp("s$")

console.log(pattern);
console.log(pattern_new);
console.log(pattern_new === pattern);

console.log("javascript".search(/Script/i));
