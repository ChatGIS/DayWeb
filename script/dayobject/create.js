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


/* 6.3 删除属性 */
delete book.author;            // book不再有属性author 
delete book["main title"];     // book也不再有属性"main title"

o = {x:1};              // o有一个属性x，并继承属性toString 
delete o.x;             // 删除x，返回true 
delete o.x;             // 什么都没做（x已经不存在了），返回true 
delete o.toString;      // 什么也没做（toString是继承来的），返回true
delete 1;               // 无意义，返回true

delete Object.prototype;// 不能删除，属性是不可配置的 
var x = 1;              // 声明一个全局变量 
delete this.x;          // 不能删除这个属性 
function f() {}         // 声明一个全局函数 
delete this.f;          // 也不能删除全局函数
this.x = 1;     // 创建一个可配置的全局属性（没有用var） 
delete x;       // 将它删除

delete x;       //在严格模式下报语法错误 
delete this.x;  //正常工作

a={p:{x:1}};
b=a.p;
delete a.p; // 执行这段代码之后b.x的值依然是1。由于已经删除的属性的引用依然存在，因此在JavaScript的某些实现中，可能因为这种不严谨的代码而造成内存泄漏。所以在销毁对象的时候，要遍历属性中的属性，依次删除。


/* 6.4 检测属性 *//* in运算符的左侧是属性名（字符串），右侧是对象。如果对象的自有属性或继承属性中包含这个属性则返回true： */var o = { x: 1 } 
"x" in o;               // true："x"是o的属性 "y" in o;               // false："y"不是o的属性 "toString" in o;        // true：o继承toString 属性

/* 对象的hasOwnProperty（）方法用来检测给定的名字是否是对象的自有属性。对于继承属性它将返回false： */
var o = { x: 1 }                                
o.hasOwnProperty("x");          // true：o有一个自有属性x 
o.hasOwnProperty("y");          // false：o中不存在属性y 
o.hasOwnProperty("toString");   // false：toString是继承属性

/* propertyIsEnumerable（）是hasOwnProperty（）的增强版，
只有检测到是自有属性且这个属性的可枚举性（enumerable attribute）为true时它才返回true。
某些内置属性是不可枚举的。通常由JavaScript代码创建的属性都是可枚举的，
除非在ECMAScript 5中使用一个特殊的方法来改变属性的可枚举性 */
var o = inherit({ y: 2 }); 
o.x = 1; o.propertyIsEnumerable("x"); // true: o有一个可枚举的自有属性x 
o.propertyIsEnumerable("y"); // false: y是继承来的 
Object.prototype.propertyIsEnumerable("toString"); // false: 不可枚举

/*  除了使用in运算符之外，另一种更简便的方法是使用“！==”判断一个属性是否是undefined： */
var o = { x: 1 } 
o.x !== undefined;              //true: o中有属性x 
o.y !== undefined;              // false: o中没有属性y 
o.toString !== undefined;       //true: o继承了toString属性

/* 上述代码中使用的是“！==”运算符，而不是“！=”。“！==”可以区分undefined和null。 */
// 如果o中含有属性x，且x的值不是null或undefined，o.x乘以2. 
if (o.x != null) o.x *= 2; // 如果o中含有属性x，且x的值不能转换为false，o.x乘以2. 
// 如果x是undefined、null、false、" " 、0或NaN，则它保持不变 
if (o.x) o.x *= 2;

/* 
	6.5 枚举属性
 */
/* 对象继承的内置方法不可枚举的，但在代码中给对象添加的属性都是可枚举的（除非用下文中提到的一个方法将它们转换为不可枚举的） */
var o = {x:1, y:2, z:3};                // 三个可枚举的自有属性 
o.propertyIsEnumerable("toString")      // =>false，不可枚举 
for(p in o)                             // 遍历属性 
console.log(p);                         // 输出x、y和z，不会输出toString

/* 有许多实用工具库给Object.prototype添加了新的方法或属性，这些方法和属性可以被所有对象继承并使用。
然而在ECMAScript 5标准之前，这些新添加的方法是不能定义为不可枚举的，因此它们都可以在for/in循环中枚举出来。
为了避免这种情况，需要过滤for/in循环返回的属性，下面两种方式是最常见的 */
for(p in o) {
    if (!o.hasOwnProperty(p)) continue;          // 跳过继承的属性 
} 
for(p in o) {    
	if (typeof o[p] === "function") 
	continue;    // 跳过方法 
}

/* 例6-2：用来枚举属性的对象工具函数 */
/* 把p中的可枚举属性复制到o中，并返回o  
 * 如果o和p中含有同名属性，则覆盖o中的属性  
 * 这个函数并不处理getter和setter以及复制属性  
 * */ 
function extend(o, p) {         
	for (prop in p) {               // 遍历p中的所有属性 
		o[prop] = p[prop];      // 将属性添加至o中         
	}         
	return o; 
} 
/*
  * 将p中的可枚举属性复制至o中，并返回o
  * 如果o和p中有同名的属性，o中的属性将不受影响
  * 这个函数并不处理getter和setter以及复制属性
  *   */ 
function merge(o, p) {
	for (prop in p) {                           // 遍历p中的所有属性         
		if (o.hasOwnProperty[prop]) 
		continue;   // 过滤掉已经在o中存在的属性         
		o[prop] = p[prop];                      // 将属性添加至o中     
	}     
	return o; 
} 
/*
  * 如果o中的属性在p中没有同名属性，则从o中删除这个属性
  * 返回o 
  *  */ 
function restrict(o, p) {
	for (prop in o) {                      // 遍历o中的所有属性
	   if (! (prop in p)) 
	   delete o[prop]; // 如果在p中不存在，则删除之     
	}     
   return o; 
} 

/*
  * 如果o中的属性在p中存在同名属性，则从o中删除这个属性
  * 返回o*/ 
function subtract(o, p) {
	for (prop in p) {      // 遍历p中的所有属性
		delete o[prop];   // 从o中删除（删除一个不存在的属性不会报错）
	} 
	return o;
} 

/*
  * 返回一个新对象，这个对象同时拥有o的属性和p的属性
  * 如果o和p中有重名属性，使用p中的属性值  */
function union(o, p) { 
	return extend(extend({},o), p);
} 
/*
  * 返回一个新对象，这个对象拥有同时在o和p中出现的属性
  * 很像求o和p的交集，但p中属性的值被忽略  */ 
function intersection(o, p) { 
	return restrict(extend({},o), p);
} 

 
/* 
 * 返回一个数组，这个数组包含的是o中可枚举的自有属性的名字
 * */ 
function keys(o) {
	if (typeof o !== "object") 
	throw TypeError(); // 参数必须是对象     
	var result = [];    // 将要返回的数组     
	for (var prop in o) {                       // 遍历所有可枚举的属性
		if (o.hasOwnProperty(prop))            // 判断是否是自有属性
		result.push(prop);             // 将属性名添加至数组中
	}     
	return result;                              // 返回这个数组 
}


/* 6.10 对象方法 */
o.toString(); // 返回'[object Object]'

/* Object中默认的toLocaleString（）方法并不做任何本地化自身的操作，它仅调用toString（）方法并返回对应值。
Date和Number类对toLocaleString（）方法做了定制，可以用它对数字、日期和时间做本地化的转换。 */
/* Object */
o.toLocaleString(); // 返回'[object Object]'
/* 日期 */
var date = new Date(); // Mon Sep 13 2021 14:05:11 GMT+0800 (中国标准时间)
date.toLocaleString(); // 返回'2021/9/13 下午2:05:11'
date.toLocaleDateString(); // 返回'2021/9/13'
date.toLocaleTimeString(); // 返回'下午2:05:11'

var s = 3;

/* Date.prototype.toJSON() */
var date = new Date();
console.log(date); //Mon Sep 13 2021 14:20:46 GMT+0800 (中国标准时间)

var jsonDate = (date).toJSON();
console.log(jsonDate); //2021-09-13T06:20:46.973Z

var backToDate = new Date(jsonDate);
console.log(backToDate); //Mon Sep 13 2021 14:20:46 GMT+0800 (中国标准时间)



debugger