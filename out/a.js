"use strict";
const x = 1;
console.log(x);
function execute(fn) {
    setTimeout(fn, 10000);
}
function hello() {
    console.log("Hello world,after 10s");
}
execute(hello);
let max = -1;
let arr = [1, 2, 5, 9, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max)
        max = arr[i];
}
console.log(max);
