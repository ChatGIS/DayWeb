console.log("进行Generator函数");

function* myGenerator() {
    yield 1;
    yield 2;
}
  
let g = myGenerator();
console.log(g.next());
console.log(g.next());
console.log(g.next());

function* generator() {
    yield 3;
    yield 4;
    return 5;
}

for(let s of generator()){
    console.log(s);
}

