
/* interface User{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    // startTrial:()=>string
    startTrial():string,
    getCoupon(couponName:string,val:number):number
}


const kp:User = {
    dbId:22,
    email:"kp@k.com",
    userId:12345,
    // startTrial: () => 123, // Type 'number' is not assignable to type 'string'
    startTrial: () => "123",
    getCoupon:(name:"test",val:12) => {
        return 100;
    }

}

kp.email = "kp@abcd.com" */
// kp.dbId = 100; // Not allowed


/// --- Re opening
interface User{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    // startTrial:()=>string
    startTrial():string,
    getCoupon(couponName:string,val:number):number
}

interface User{
    gitHubToken:string
}

const kp:User = {
    dbId:22,
    email:"kp@k.com",
    userId:12345,
    // startTrial: () => 123, // Type 'number' is not assignable to type 'string'
    startTrial: () => "123",
    getCoupon:(name:"test",val:12) => {
        return 100;
    },
    gitHubToken: "Tocken"

}

/// Extends

interface Admin extends User{
    role: "admin" | "ta" | "test"
}

const kp1:Admin = {
    dbId:22,
    role:'admin',
    email:"kp@k.com",
    userId:12345,
    // startTrial: () => 123, // Type 'number' is not assignable to type 'string'
    startTrial: () => "123",
    getCoupon:(name:"test",val:12) => {
        return 100;
    },
    gitHubToken: "Tocken"

}