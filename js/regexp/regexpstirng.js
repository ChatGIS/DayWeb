console.log("进入regexpstring.js");

// search()
"JavaScript".search(/script/ui) // 4
"Java".search(/script/ui) // -1
"JavaScript".search("Script") // 4
"JavaScript".search(/a/uig) // 1

// replace()
let text = "I'm learning javascript, javascript is interesting"
let textChanged = text.replace("javascript", "JavaScript")
console.log(text)
console.log(textChanged); // I'm learning JavaScript, javascript is interesting

const pattern = /javascript/ug
textChanged = text.replace(pattern, "JavaScript")
console.log(textChanged); // I'm learning JavaScript, JavaScript is interesting

// replaceAll()
textChanged = text.replaceAll("javascript", "JavaScript")
console.log(textChanged); // I'm learning JavaScript, JavaScript is interesting
// textChanged = text.replaceAll(/javascript/, "JavaScript") // Uncaught TypeError: String.prototype.replaceAll called with a non-global RegExp argument

// replace()高级应用
const patternGroup = /"([^"]*)"/ug
textChanged = 'A book named "JavaScript Learn"'.replace(patternGroup, '《$1》')
console.log(textChanged); // A book named 《JavaScript Learn》

textChanged = "tomJerry".replace(/[A-Z]/ug, m => " & " + m)
console.log(textChanged); // tom & Jerry

// match()
textChanged = "JavaScript".match("a")
console.log(textChanged); // ['a', index: 1, input: 'JavaScript', groups: undefined]
textChanged = "JavaScript".match(/a/g)
console.log(textChanged); // ['a', 'a']
textChanged = "JavaScript".match()
console.log(textChanged); // ['', index: 0, input: 'JavaScript', groups: undefined]
textChanged = "JavaScript".match("python")
console.log(textChanged); // null

// matchAll()
for(let num of "1,2,3,4".matchAll(/[0-9]/ug)){
    console.log(num[0]);
}

// split()
textChanged = "1,2,345,67,89".split(",")
console.log(textChanged); // ['1', '2', '345', '67', '89']
textChanged = "1,2,345,67,89".split("@")
console.log(textChanged); // ['1,2,345,67,89']
textChanged = "1,2,345,67,89".split(",", 4)
console.log(textChanged); // ['1', '2', '345', '67']