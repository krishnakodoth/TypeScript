// Union is one more type combined

let score: number | string = 33

score = 444
score = "55"


type User = {
    name: string
    id: number
}
type Admin = {
    username: string
    id: number
}

let kp: User | Admin = { name: "Krishna", id: 1234 }

//----
kp = { username: "kp", id: 1234 }


/* function getDbID(id:number|string){
    console.log(`DB id is: ${id}`);
} */



getDbID(3)
getDbID("3")

function getDbID(id: number | string) {
    // id.toLowerCase();
    // Property 'toLowerCase' does not exist on type 'string | number'.
    // Property 'toLowerCase' does not exist on type 'number'.

    if(typeof id === "string"){
        id.toLowerCase();
    }
    else{
        return id + 3;
    }
    console.log(`DB id is: ${id}`);
}

/// array

const data1: number[] = [1,2,3,4];
// const data2: number[] = [1,2,3,"4"]; // [ts] Type 'string' is not assignable to type 'number'.
// const data3: string[] = [1,2,3,"4"]; // const data2: number[] = [1,2,3,"4"]; 
// const data3: string[] | number[] = [1,2,3,"4"]; 
const data3: (string | number | boolean) [] = [1,2,3,"4",true]; // const data2: number[] = [1,2,3,"4"]; 

// Literal type
let pie:3.14 = 3.14

// pie = 4.123; // [ts] Type '4.123' is not assignable to type '3.14'


let status: "Pending"|"Active"|"Inactive";

status = "Pending";// Allowed
// status = "abcd"; // [ts] Type '"abcd"' is not assignable to type '"Pending" | "Active" | "Inactive"'.

export { }