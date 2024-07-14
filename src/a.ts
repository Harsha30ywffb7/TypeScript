const x:number =1
console.log(x)

// function greet(greeting :string){
//     console.log("hello " + greeting)
// }

// greet("Good evening")

// console.log(sum(3,4))
// function sum(x: number, y:number): number{
//     return x+y;
// }

// const isLegal =(age: number)=>{
//     if(age > 18)  console.log("legal")
//     else console.log("illegal")
// }

// isLegal(90)

 function execute(fn :Function){
    setTimeout(fn, 10000);
}

function hello(){
    console.log("Hello world,after 10s")
}


execute(hello);

// max number of the array.

let max : number = -1;
let arr: number[] = [1,2,5,9,3]
for(let i: number =0; i<arr.length; i++){
    if(arr[i] > max) max = arr[i];
}

console.log(max);