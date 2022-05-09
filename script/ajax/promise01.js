console.log('进入promise模块');

let myFirstPromise = new Promise(function(resolve, reject){
    console.log('第1步，创建promise!');
    // 两种方法都可以，就是不能使用setTimeout(resolve("Resolved!"), 3000)，没有延时效果
    // setTimeout(resolve, 3000, "Resolved")
    // setTimeout(function(){
    //     resolve("Resolved!"); //代码正常执行！
    // }, 3000);
    resolve("Resolved")
})

myFirstPromise.then(function(successMessage){
    console.log('第2步, ' + successMessage);
})


console.log("第2步，执行当前脚本的同步任务");

// 示例2
let myPromise = new Promise((resolve, reject) => {
    resolve("Resolved")
    // reject("Rejected")
})

myPromise.then(res => {
    // null.name
    console.log(res);
}, err => {
    console.log(`then函数：${err}`);
})

myPromise.catch(res => {
    console.log(`catch函数：${res}`);
})

// 示例3
let myPromise3 = new Promise((resolve, reject) => {
    resolve("Resolved")
})

myPromise3.then(res => {
    null.name
}).catch(res => {
    console.log(`报错信息：${res}`);
})