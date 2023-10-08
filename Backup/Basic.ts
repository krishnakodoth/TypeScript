if ("" == 0) {
    // It is! But why??
}
var x = 10
if (1 < x < 3) {
    // True for *any* value of x!
}

const obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj.width * obj.heigth;

let a = (4


console.log(4 / []);

let helloWorld = "Hello World";


interface User {
    name: string;
    id: number;
}

const user: User = {
    username: "Hayes",
    //   Type '{ username: string; id: number; }' is not assignable to type 'User'.
    // Object literal may only specify known properties, and 'username' does not exist in type 'User'.
    id: 0,
};