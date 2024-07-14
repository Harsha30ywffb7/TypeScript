interface User {
    firstName:String, 
    lastName:String,
    age:number
}

function greeting (user: User){
    console.log("Hello"+ user.firstName)
}

greeting({firstName:"Harsha",lastName:"vardhan",age:20})


interface Animal{
    name: String,
    age:number,
    speak : ()=>void;
}

//extending interfaces.
interface Mammal extends Animal{
    life: String;
}

let crocodile: Mammal = {
    name:"croc",
    age:10,
    speak(){
        console.log('bek bek')
    },
    life:"water and land"
}

type ranbir = Animal | Mammal;

console.log(crocodile.name)