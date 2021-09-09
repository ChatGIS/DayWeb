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
// library_function(inherit(o));   // 防止对o的意外修改

/* 6.2、属性的查询和设置 */
var author = book.author; // 得到book的“author”属性
var name = author.surname; // 得到获得author的“surname”属性
var title = book["main title"]; // 得到book的"main title"属性

/* 6.2.1、作为关联数组的对象 */
// 示例1
var customer = {
	"address0":"中国",
	"address1":"山东省",
	"address2":"济南市",
	"address3":"历下区"
	};
var addr = "";
for(i = 0; i < 4; i++){
	addr += customer["address" + i];
}

// 示例2
var portfolio = {};
function addstock(stockname, shares){
	portfolio[stockname] = shares;
}
addstock("Ali", 1);
addstock("BaiDu", 2);
addstock("Ten", 3);

function getValue(){
	var total = 0.0;
	for(stock in portfolio){
		var shares = portfolio[stock];
		var price = 2;
		total += shares * price;
	}
	return total;
}
var total1 = getValue();

/* 6.2.2、继承 

*/
var o = {}      // o 从 Object.prototype 继承对象的方法 
o.x = 1;        // 给o定义一个属性x 
var p = inherit(o); // p继承o和Object.prototype 
p.y = 2;        // 给p定义一个属性y 
var q = inherit(p); // q继承p、o和Object.prototype 
q.z = 3;        // 给q定义一个属性z 
var s = q.toString(); // toString继承自Object.prototype 
console.log(q.x + q.y)       // => 3: x和y分别继承自o和p

/* 在JavaScript中，只有在查询属性时才会体会到继承的存在，而设置属性则和继承无关，
这是JavaScript的一个重要特性，该特性让程序员可以有选择地覆盖（override）继承的属性。 */
var unitcircle = { r:1 };       // 一个用来继承的对象 
var c = inherit(unitcircle);    // c继承属性r 
c.x = 1; c.y = 1;               // c定义两个属性 
c.r = 2;                        // c覆盖继承来的属性 
console.log(unitcircle.r);                   // => 1，原型对象没有修改

/* 6.2.3、属性访问错误 */
book.subtitle // undefined：属性不存在
// 抛出一个类型错误异常，undefined没有length属性 
// var len = book.subtitle.length;	// Uncaught TypeError: Cannot read properties of undefined (reading 'length')

// 两种避免出错的方法
// 一种冗余但很易懂的方法 
var len = undefined; 
if (book) {     
	if (book.subtitle) 
	len = book.subtitle.length; 
} 
// 一种更简练的常用方法，获取subtitle的length属性或undefined 
var len = book && book.subtitle && book.subtitle.length;

// 内置构造函数的原型是只读的 
Object.prototype = 0;   // 赋值失败，但没报错，Object.prototype没有修改
debugger

