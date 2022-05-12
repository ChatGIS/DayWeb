console.log('进入fetch api模块');

let res = fetch("http://localhost:3007/api/dictionary")
console.log(res);

res.then(val => {
    console.log(val);
})
