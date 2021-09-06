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


/* 6.1.4、Object.create()
 ECMAScript 5定义了一个名为Object.create（）的方法，它创建一个新对象，其中第一个参数是这个对象的原型。
 */
var o1 = Object.create({x:1, y:2});	// o1继承了属性x和y
var o2 = Object.create(null);	// o2不继承任何属性和方法
var o3 = Object.create(Object.prototype); // o3和{}和new Object()一样

// 例6-1：通过原型继承创建一个新对象
// inherit() 返回了一个继承自原型对象p的属性的新对象 
// 这里使用ECMAScript 5中的Object.create()函数（如果存在的话） 
// 如果不存在Object.create()，则退化使用其他方法 
function inherit(p) {         
	if (p == null) throw TypeError();       // p是一个对象，但不能是null         
	if (Object.create)                      // 如果Object.create()存在                 
		return Object.create(p);        // 直接使用它
	var t = typeof p;                       // 否则进行进一步检测         
	if (t !== "object" && t !== "function") throw TypeError();    
	function f() {};                        // 定义一个空构造函数         
	f.prototype = p;                        //将其原型属性设置为p         
	return new f();                         //使用f()创建p的继承对象 
}
/* inherit（）函数的其中一个用途就是防止库函数无意间（非恶意地）修改那些不受你控制的对象。
不是将对象直接作为参数传入函数，而是将它的继承对象传入函数。
当函数读取继承对象的属性时，实际上读取的是继承来的值。
如果给继承对象的属性赋值，则这些属性只会影响这个继承对象自身，而不是原始对象： */
var o = { x: "don't change this value" }; 
library_function(inherit(o));   // 防止对o的意外修改

debugger