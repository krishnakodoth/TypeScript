

// const User:string[] = ["kp"];
// const User:(string|number)[] = ["kp",1];
// const User:(string|number)[] = [1,"kp"];
// --> There is no restriction on the order


let tUser: [string,number,boolean] = ["kp", 12,true];

// tUser = [true,12,"kp"]; // [ts] Type 'boolean' is not assignable to type 'string'

// Type with tuple
type User = [string,number];

const myUser:User = ["kp",123]
// const myUser1:User = [12,"kp",123]; // [ts] Type 'number' is not assignable to type 'string'.
// Even it is tuple typed, we will be able to use built functon

myUser.push("true");
myUser.pop();

export {}