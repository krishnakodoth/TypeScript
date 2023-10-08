
function addTwo(num: number): number {
    // num.toUpperCase();
    return num + 2;
    // return "hello"
}

// addTwo("5"); // [ts] Argument of type 'string' is not assignable to parameter of type 'number'.
addTwo(5)


function getUpper(val: string) {
    return val.toUpperCase();
}


// getUpper(4); // Argument of type 'number' is not assignable to parameter of type 'string'.

getUpper("krishna");


let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    return "test"
}

loginUser("k", "k@k.com");


/// function getValue(myVal: number): true | "200 OK"

function getValue(myVal: number) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
const stattus = getValue(10)


const getHello = (s: string): string => {
    return ""
}

/// const heros: string[]
const heros = ["thor","spiderman","ironman"];

// const heros = [1,2,3];

heros.map((hero):string => {
    // return 1; // Type 'number' is not assignable to type 'string'.
    return `hero is ${hero}`
})


function consoleError(errmsg:string):void{
    console.log(errmsg);
}

function handleError(errmsg:string):never{
    throw new Error(errmsg)
}

export { }