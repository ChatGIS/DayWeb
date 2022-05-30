console.log('进入array01.js');
// 数组合并
let arrA = [1, 2];
let arrB = [2, 3, 4];

// 方法1、for循环
let arr1 = [];
for(let i in arrA){
    arr1.push(arrA[i])
}
for(let i in arrB){
    arr1.push(arrB[i])
}
console.log("arr1", arr1);

// 方法2、concat方法
// 生成新的数组
let arr2 = [];
arr2 = arr2.concat(arrA);
arr2 = arr2.concat(arrB);
console.log("arr2", arr2);

// 方法3、arr.push.apply
// 改变原数组
let arr3 = [];
arr3.push.apply(arr3, arrA)
arr3.push.apply(arr3, arrB)
console.log("arr3", arr3);

// ES6语法
let arr4 = [...arrA, ...arrB]
console.log("arr4", arr4);