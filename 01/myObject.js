"use strict";
/* const User = {
    name:"krishna",
    email:"kp@k.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}) {

}

createUser({name:"kp",isPaid:true});


// return an object
function createCourse():{name:string,price:number}{
    return {
        name: "reactjs",
        price:999
    }
}


// Bad syntax

createUser({name:"kp",isPaid:true});

const myUser = {name:"kp",isPaid:true};
createUser(myUser); */
exports.__esModule = true;
var myUser = {
    _id: "1234",
    name: "K",
    email: "k@k.com",
    isActive: false,
    testArray: [1, 2, 3, 4, 5],
    creditCard: 123456
};
myUser.email = "kp@k.com";
myUser.testArray.push(10);
console.table(myUser);
