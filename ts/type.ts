// type命令用来定义一个类型的别名
type Age = number
let age:Age = 55
console.log('age:', age);

// 
type Color = 'red'
console.log(`${Color}`);

{
    type Color = 'blue'
}