console.log('进入let & const');

// const MAX = 123;
// MAX = 456 // Uncaught TypeError: Assignment to constant variable.

// const MIN; // Uncaught SyntaxError: Missing initializer in const declaration

if(true){
    const MAX = 1234
}
console.log(MAX); // Uncaught ReferenceError: MAX is not defined