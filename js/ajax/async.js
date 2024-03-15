console.log("进入async模块");

function myPromise(){
    return new Promise(resolve => {
        setTimeout(() => {resolve("Resolved")}, 2000)
    })
}

async function asyncFun(){
    console.log('async函数开始');
    let res = await myPromise()
    console.log(res);
    console.log('async函数结束');   
}

asyncFun()

async function anotherFun(){
    console.log('另一个async函数开始');
    let res = await myPromise();
    console.log(res);
    console.log('另一个async函数结束');   
}
anotherFun()