/* 
	6.1、创建对象
 */
/* 6.1.1、对象直接量 */
var empty = {};	// 没有任何属性的对象
var point = {x:0, y:0};	// 两个属性
var point1 = {"x":0, "y":0}; // 
var point2 = {x:point.x, y:point.y}; // 更复杂的值
var book = {
	"main title":"JavaScript", // 属性名字里有空格，必须使用字符串表示
	"sub-title":"The Definitive Guide", // 属性名字里有连字符，必须使用字符串表示
	"for":"all audiences" , // “for”是保留字，因此必须使用引号
	author:{ // 这个属性值是一个对象
		firstname:"David", // 注意这些属性名都没有引号
		surname:"Flanagan"
	}
}; 

debugger
console.log(point);