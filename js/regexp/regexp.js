console.log('进入regexp.js');

// 定义正则表达式
const patternPlain = /meng/
const patternPlain1 = /is/
const patternPlainG = /is/g
const pattern = /s$/
const pattern_new = new RegExp("s$")

// 定义字符串
const matchString = "mengshisan is learning JavaScript and RegExp, RegExg is interesting."

// 查找字符串
console.log(patternPlain.test(matchString));
console.log(patternPlain1.test(matchString));
console.log(patternPlain.exec(matchString));
console.log(patternPlain1.exec(matchString));
console.log(patternPlainG.exec(matchString));
console.log(matchString.match(patternPlainG));

console.log(pattern);
console.log(pattern_new);
console.log(pattern_new === pattern);

console.log("javascript".search(/Script/i));
