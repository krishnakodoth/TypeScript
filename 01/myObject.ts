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

/* type User = {
    name:string;
    email:string;
    isActive:boolean
}


function createUser(user:User){
return{
    name:"",
    emial:"",
    isActive:"true"
}
}

createUser({name:"",email:"",isActive:true});
 */


type User = {
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    creditCard?:number
    readonly testArray:number[]
}

let myUser:User = {
    _id:"1234",
    name:"K",
    email:"k@k.com",
    isActive:false,
    testArray:[1,2,3,4,5],
    creditCard:123456
}

myUser.email = "kp@k.com";
myUser.testArray.push(10);

console.table(myUser);
// myUser._id = "100"; // Cannot assign to '_id' because it is a read-only property.

//// & is for combine types

type cardNumber = {
    cardNumber:string
}
type cardDate = {
    cardDate:string
}
type cardDetails = cardNumber & cardDate & {
    cvv:number
}




export {}