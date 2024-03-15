console.log('进入object01');

// 判断对象是否包含key值
// 定义对象
let obj = {
    "name": "十三",
    "sex": 18
}

// 判断一
let isHaveKey = "name" in obj;
console.log(isHaveKey);

// 判断二
isHaveKey = obj.hasOwnProperty("age")
console.log(isHaveKey);

console.log(obj["name"]);
