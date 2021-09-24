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

/* 6.6 属性getter和setter */
console.log("## 6.6 属性getter和setter");
var point66 = {         
	//x和y是普通的可读写的数据属性         
	x: 1.0,         
	y: 1.0,         
	// r是可读写的存取器属性，它有getter和setter.         
	// 函数体结束后不要忘记带上逗号         
	get r() {
		return Math.sqrt(this.x*this.x + this.y*this.y); 
	},         
	set r(newvalue) {           
		var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);           
		var ratio = newvalue/oldvalue;           
		this.x *= ratio;           
		this.y *= ratio;         
	},         
	//theta是只读存取器属性，它只有getter方法        
	 get theta() { 
		 return Math.atan2(this.y, this.x); 
	 } 
};

var qPoint = inherit(point66);     // 创建一个继承getter和setter的新对象 
qPoint.x = 1, qPoint.y = 1;       // 给q添加两个属性 
console.log(qPoint.r);       // 可以使用继承的存取器属性 console.log(q.theta);

qPoint.r =10000 // 调用setter方法
console.log(qPoint.x); // 7071.067811865475
console.log(qPoint.y); // 7071.067811865475

/* 场景1、智能检测属性的写入值以及在每次属性读取时返回不同值 */
// 这个对象产生严格自增的序列号
 var serialnum = {         // 这个数据属性包含下一个序列号         
	 // $符号暗示这个属性是一个私有属性         
	 $n: 0,         
	 // 返回当前值，然后自增         
	 get next() { return this.$n++; },         
	 // 给n设置新的值，但只有当它比当前值大时才设置成功         
	 set next(n) {                 
		 if (n >= this.$n) this.$n = n;                 
		 else throw "序列号的值不能比当前值小";         
		 } 
};

/* 最后我们再来看一个例子，这个例子使用getter方法实现一种“神奇”的属性： */
// 这个对象有一个可以返回随机数的存取器属性 
// 例如，表达式"random.octet"产生一个随机数 
// 每次产生的随机数都在0~255之间 
var random = {         
	get octet() { 
		return Math.floor(Math.random()*256); 
	},         
	get uint16() { 
		return Math.floor(Math.random()*65536); 
	},         
	get int16() { 
		return Math.floor(Math.random()*65536)-32768; 
	} 
};

/* 6.7 属性的特性 */
// 返回 {value: 1, writable:true, enumerable:true, configurable:true} 
Object.getOwnPropertyDescriptor({x:1}, "x"); 
// 查询上文中定义的randam对象的octet属性 
// 返回 { get: /*func*/, set:undefined, enumerable:true, configurable:true} 
Object.getOwnPropertyDescriptor(random, "octet"); 
// 对于继承属性和不存在的属性，返回undefined 
Object.getOwnPropertyDescriptor({}, "x"); // undefined，没有这个属性 
Object.getOwnPropertyDescriptor({}, "toString"); // undefined， 继承属性

var o = {}; // 创建一个空对象 
// 添加一个不可枚举的数据属性x，并赋值为1 
Object.defineProperty(o, "x", { value : 1,                                 
writable: true,                                 
enumerable: false,                                 
configurable: true}); // 属性是存在的，但不可枚举
o.x; // => 1 
Object.keys(o) // => [] 
// 现在对属性x做修改，让它变为只读 
Object.defineProperty(o, "x", { writable: false }); 
// 试图更改这个属性的值 
o.x = 2; // 操作失败但不报错，而在严格模式中抛出类型错误异常

var p = Object.defineProperties({}, {         
	x: { value: 1, writable: true, enumerable:true, configurable:true },         
	y: { value: 1, writable: true, enumerable:true, configurable:true },         
	r: {                 
		get: function() { return Math.sqrt(this.x*this.x + this.y*this.y) },                 
		enumerable:true,                 
		configurable:true,
		},
	});
	
/* 例6-3：复制属性的特性 */
/*
  * 给Object.prototype添加一个不可枚举的extend()方法
  * 这个方法继承自调用它的对象，将作为参数传入的对象的属性一一复制
  * 除了值之外，也复制属性的所有特性，除非在目标对象中存在同名的属性，  
  * 参数对象的所有自有对象（包括不可枚举的属性）也会一一复制。
	* *   */ 
	Object.defineProperty(Object.prototype,     
	"extend",                   // 定义 Object.prototype.extend     
	{
		writable: true,
		enumerable: false,      // 将其定义为不可枚举的         
		configurable: true,         
		value: function(o) {    // 值就是这个函数                 
			// 得到所有的自有属性，包括不可枚举属性                 
			var names = Object.getOwnPropertyNames(o);                 // 遍历它们                 
			for(var i = 0; i < names.length; i++) {                         
				// 如果属性已经存在，则跳过                         
				if (names[i] in this) continue;                         
				// 获得o中的属性的描述符                         
				var desc = Object.getOwnPropertyDescriptor(o,names[i]);                         
				// 用它给this创建一个属性                         
				Object.defineProperty(this, names[i], desc);                  
			}          
		} ,
	});

/* 6.8 对象的三个属性 */
/* 
 *通过对象直接量创建的对象使用Object.prototype作为它们的原型。
 *通过new创建的对象使用构造函数的prototype属性作为它们的原型。
 *通过Object.create（）创建的对象使用第一个参数（也可以是null）作为它们的原型。 */
Object.getPrototypeOf(book) == Object.prototypeObject; // 返回true

/* 要想检测一个对象是否是另一个对象的原型（或处于原型链中），请使用isPrototypeOf（）方法。
例如，可以通过p.isPrototypeOf（o）来检测p是否是o的原型：var p = {x:1};       */                   
// 定义一个原型对象 
var proto = {x:1};
var o = Object.create(proto);               // 使用这个原型创建一个对象 
proto.isPrototypeOf(o)                      // => true:o继承自p 
Object.prototype.isPrototypeOf(o)       //=> true:p继承自Object.prototype

/* 例6-4中的classof（）函数可以返回传递给它的任意对象的类： */
console.log("### 6.8.2、类属性");
function classof(o) {     
	if (o === null) return "Null";     
	if (o === undefined) return "Undefined";     
	return Object.prototype.toString.call(o).slice(8,-1); 
}
console.log(classof(proto)); // 返回：Object
console.log(classof(null));          // => "Null" 
console.log(classof(1));              // => "Number" 
console.log(classof(""));            // => "String" 
console.log(classof(false));          // => "Boolean" 
console.log(classof({}));             // => "Object" 
console.log(classof([]));             // => "Array" 
console.log(classof(/./));            // => "Regexp" 
console.log(classof(new Date()));     // => "Date" 
console.log(classof(window));         // => "Window"(这是客户端宿主对象) 
/* 那些自定义构造函数创建的对象也是一样，类属性也是“Object”，因此对于自定义的类来说，没办法通过类属性来区分对象的类 */
function f() {};        // 定义一个自定义构造函数 
classof(new f());       // => "Object"

var App = function() {

};
var app = new App();
console.log(classof(app)); // 返回：Object

console.log("### 6.8.3、可扩展性");
/* 可扩展属性的目的是将对象“锁定”，以避免外界的干扰。 */
var o683 = {x:1};
console.log(Object.isExtensible(o683)); // true
Object.preventExtensions(o683);
console.log(Object.isExtensible(o683)); // false
o683.y = 2;
console.log(o683.y); // undefined

// 创建一个封闭对象，包括一个冻结的原型和一个不可枚举的属性 
var o = Object.seal(Object.create(Object.freeze({x:1}), {y: {value: 2, writable: true}}));

/* 6.9 序列化对象 */
/* 对象序列化（serialization）是指将对象的状态转换为字符串，也可将字符串还原为对象。
ECMAScript 5提供了内置函数JSON.stringify（）和JSON.parse（）用来序列化和还原JavaScript对象。 */
o = {x:1, y:{z:[false,null,""]}};       // 定义一个测试对象 
s = JSON.stringify(o);                  // s是 '{"x":1,"y":{"z":[false,null,""]}}' 
p = JSON.parse(s);                      // p是o的深拷贝

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

/* Date.prototype.toJSON() */
var date = new Date();
console.log(date); //Mon Sep 13 2021 14:20:46 GMT+0800 (中国标准时间)

var jsonDate = (date).toJSON();
console.log(jsonDate); //2021-09-13T06:20:46.973Z

var backToDate = new Date(jsonDate);
console.log(backToDate); //Mon Sep 13 2021 14:20:46 GMT+0800 (中国标准时间)
