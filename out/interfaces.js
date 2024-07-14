"use strict";
function greeting(user) {
    console.log("Hello" + user.firstName);
}
greeting({ firstName: "Harsha", lastName: "vardhan", age: 20 });
let crocodile = {
    name: "croc",
    age: 10,
    speak() {
        console.log('bek bek');
    },
    life: "water and land"
};
console.log(crocodile.name);
