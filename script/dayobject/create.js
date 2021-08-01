console.log("进入创建对象模块" + new Date());
/* 
	6.1、创建对象
 */
/* 6.1.1、对象直接量
 对象直接量是一个表达式，这个表达式的每次运算都创建并初始化一个新的对象。每次计算对象直接量的时候，也都会计算它的每个属性的值。
 也就是说，如果在一个重复调用的函数中的循环体内使用了对象直接量，它将创建很多新对象，并且每次创建的对象的属性值也有可能不同。
 */
var empty = {}	// 没有任何属性的对象
var point = {x:0, y:0}	// 两个属性
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

/* 6.1.2、通过new创建对象 
 new运算符创建并初始化一个新对象。
 关键字new后跟随一个函数调用。这里的函数称做构造函数（constructor），构造函数用以初始化一个新创建的对象。
 JavaScript语言核心中的原始类型都包含内置构造函数。
 */
var o = new Object(); // 创建一个空对象，和{}一样
var a = new Array(); // 创建一个空数组，和[]一样
var d = new Date(); // 创建一个表示当前时间的Date对象
var r = new RegExp("js"); // 创建一个可以进行模式匹配的RegExp对象
debugger
