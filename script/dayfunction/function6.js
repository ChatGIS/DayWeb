/* 8.1.3　箭头函数 */
// 箭头函数的一般形式是圆括号中逗号分隔的参数列表，后跟箭头=>，再跟包含在花括号中的函数体
const sum = (x, y) => {return x + y};
console.log(sum(4, 5)); // 9
// 但箭头函数还支持一种更简洁的语法。如果函数体只有一个return语句，那么可以省略return关键字、语句末尾的分号以及花括号，将函数体写成一个表达式，它的值将被返回
const sum1 = (x, y) => x + y;
console.log(sum1(6, 5)); // 11
// 更进一步，如果箭头函数只有一个参数，也可以省略包围参数列表的圆括号
// 还要注意，在写箭头函数时，不能在函数参数和箭头之间放换行符。否则，就会出现类似const polynomial = x这样的一行代码，而这行代码本身是一条有效的赋值语句。
const polynomial = x => x*x + 2*x + 3;
console.log(polynomial(5)); // 38
// 不过要注意，对于没有参数的箭头函数则必须把空圆括号写出来：
const constantFunc = () => 42;
console.log(constantFunc()); // 42
// 如果箭头函数的函数体是一个return语句，但要返回的表达式是对象字面量，那必须把这个对象字面量放在一对圆括号中，
// 以避免解释器分不清花括号到底是函数体的花括号，还是对象字面量的花括号
const fun1 = x => {return {value : x};};
console.log(fun1(1)); // {value: 1}
const fun2 = x => ({value : x});
console.log(fun2(2)); // {value: 2}
const fun3 = x => {value : x};
console.log(fun3(3)); // undefined; 错误：什么也不返回
// const fun4 = x => { v: x, w: x}; // Uncaught SyntaxError: Unexpected token ':'
// fun4(4); 

let fun5 = null,  x5 = 0;
try {
	fun5(x5++); // 因为f是null所以抛出TypeError
} catch(e){
	console.log(`fun5报错输出：${x5}`); // => 1 :抛出异常前x发生了递增
}

fun5?.(x++); // => undefined: f是null，但不会抛出异常
console.log(`fun5条件式调用短路测试：${x5}`); // => 1 :因为短路，递增不会发生


let obj1 = {                             // 对象o     
	m: function() {                   // 对象中的方法m()         
		let self = this;              // 将this的值保存至一个变量中          
		console.log(this === obj1);      // 输出true，this就是这个对象o         
		f();                          // 调用嵌套函数f()          
		function f() {                // 定义一个嵌套函数f()              
			console.log(this === obj1); // "false": this的值是全局对象或undefined              
			console.log(self === obj1); // "true": self指外部函数的this值         
		};
	    const f2 = () => {
			console.log(this === obj1); // "true": 因为箭头函数继承this  
		}
		f2();
		
		const f3 = (function(){
			console.log(this === obj1); // "true": 因为我们把这个函数绑定到了外部的this
		}).bind(this);
		f3();
	},
}; 
obj1.m();  
debugger