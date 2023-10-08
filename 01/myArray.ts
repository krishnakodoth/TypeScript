

// const superHeros = []; // const superHeros: any[]

// const superHeros:[] = [];
// Argument of type 'string' is not assignable to parameter of type 'never'.


const superHeros:string[] = [];

const heroPower:Array<number> = [];

type User = {
    name:string
    isActive:boolean
}

const allUsers:User[] = [];

superHeros.push("spiderman");

heroPower.push(2);

// allUsers.push("test"); // [ts] Argument of type 'string' is not assignable to parameter of type 'User'.
allUsers.push({name:"kp",isActive:true}); 


// Multi dimentonal array

const MLArray :number[][] = [
    [1,2,3,3],
    // "test", // Type 'string' is not assignable to type 'number[]'.
    [0,0,0,1]
]

export {}