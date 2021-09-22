/* 6.2.1　对象字面量 */
let empty = {}; // 没有属性的对象
let point = {x:0, y:0}	// 包含两个数值属性
let point2 = {x:point.x, y:point.y}; // 更复杂的值
let book = {
	"main title":"JavaScript", // 属性名字里有空格，必须使用字符串表示
	"sub-title":"The Definitive Guide", // 属性名字里有连字符，必须使用字符串表示
	// es5 是带引号的
	// "for":"all audiences" , // “for”是保留字，因此必须使用引号
	for:"all audiences" , // “for”是保留字，但没有引号
	author:{ // 这个属性值是一个对象
		firstname:"David", // 注意这些属性名都没有引号
		surname:"Flanagan"
	}
}; 

/* 6.2.2　使用new创建对象 */
let o = new Object(); // 创建一个空对象，和{}一样
let a = new Array(); // 创建一个空数组，和[]一样
let d = new Date(); // 创建一个表示当前时间的Date对象
// var r = new RegExp("js"); // 创建一个可以进行模式匹配的RegExp对象
let r = new Map(); // 创建一个映射对象，用于存储键值映射

/* 6.2.3　原型 */
/* 记住：几乎所有对象都有
原型，但只有少数对象有prototype属性。正是这些有prototype属
性的对象为所有其他对象定义了原型。
Object.prototype是为数不多的没有原型的对象，因为它不继
承任何属性。其他原型对象都是常规对象，都有自己的原型。 */
/* 多数
内置构造函数（和多数用户定义的构造函数）的原型都继承自
Object.prototype。例如，Date.prototype从Object.prototype继
承属性，因此通过new Date()创建的日期对象从Date.prototype和
Object.prototype继承属性。这种原型对象链接起来的序列被称为
原型链。 */

/* 6.2.4　Object.create() */
/* Object.create()的一个用途是防止对象被某个第三方库函数意
外（但非恶意）修改。这种情况下，不要直接把对象传给库函数，
而要传入一个继承自它的对象。如果函数读取这个对象的属性，可
以读到继承的值。而如果它设置这个对象的属性，则修改不会影响
原始对象。 */
let o1 = Object.create({x:1, y:2}); // o1继承属性x和属性y
console.log(o1.x + o1.y); // => 3

let o2 = Object.create(null); // o2不继承任何属性和方法
let o3 = Object.create(Object.prototype); // o3和{}和new Object()一样

/* 6.3.2　继承 */
let o4 = {}      // o 从 Object.prototype 继承对象的方法 
o.x = 1;        // 给o定义一个属性x 
let p = Object.create(o4); // p继承o和Object.prototype
p.y = 2;        // 给p定义一个属性y 
let q = Object.create(p); // q继承p、o和Object.prototype 
q.z = 3;        // 给q定义一个属性z 
let s = q.toString(); // toString继承自Object.prototype 
console.log(q.x + q.y)       // => 3: x和y分别继承自o和p

let unitcircle = { r:1 };       // 一个用来继承的对象 
let c = Object.create(unitcircle);    // c继承属性r 
c.x = 1; c.y = 1;               // c定义两个属性 
c.r = 2;                        // c覆盖继承来的属性 
console.log(unitcircle.r);                   // => 1，原型对象没有修改
debugger