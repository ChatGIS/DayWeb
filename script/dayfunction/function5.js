// 例8-1：定义JavaScript函数
//输出o的每个属性的名称和值，返回undefined 
function printprops(o) {         
	for(var p in o)                 
	console.log(p + ": " + o[p] + "\n"); 
} 
// 计算两个笛卡尔坐标（x1,y1）和 (x2,y2)之间的距离 
function distance(x1, y1, x2, y2) {         
	var dx = x2 - x1;         
	var dy = y2 - y1;         
	return Math.sqrt(dx*dx + dy*dy); 
} 
console.log(factorial(5));
// 计算阶乘的递归函数（调用自身的函数） 
// x!的值是从x到x递减（步长为1）的值的累乘 
function factorial(x) { 
	if (x <= 1) return 1;
	return x * factorial(x-1); 
} 

// 这个函数表达式定义了一个函数用来求传入参数的平方 
// 注意我们把它赋值给一个变量 
var square = function(x) { 
	return x*x; 
} 

// 函数表达式可以包含名称，这在递归时很有用 
var f = function fact(x) { 
	if (x <= 1) return 1; 
	else return x*fact(x-1); 
}; 
// 函数表达式也可以作为参数传给其他函数 
// data.sort(function(a,b) { return a-b; }); 
//函数表达式有时定义后立即调用 
var tensquared = (function(x) {return x*x;}(10));

var strict = (function() { return !this; }());  

var calculator = { //对象直接量         
	operand1: 1,         
	operand2: 1,  
	add: function() {         
		//注意this关键字的用法，this指代当前对象              
		this.result = this.operand1 + this.operand2;         
	},
}; 
calculator.add(); //这个方法调用计算1+1的结果 
calculator.result // => 2

var oself = {                             // 对象o     
	m: function() {                   // 对象中的方法m()         
		var self = this;              // 将this的值保存至一个变量中          
		console.log(this === oself);      // 输出true，this就是这个对象o         
		f();                          // 调用辅助函数f()          
		function f() {                // 定义一个嵌套函数f()              
			console.log(this === oself); // "false": this的值是全局对象或undefined              
			console.log(self === oself); // "true": self指外部函数的this值         
		}     
	}         ,
}; 
oself.m();                                // 调用对象o的方法m()
  
debugger