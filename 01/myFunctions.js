"use strict";
exports.__esModule = true;
function addTwo(num) {
    // num.toUpperCase();
    return num + 2;
    // return "hello"
}
// addTwo("5"); // [ts] Argument of type 'string' is not assignable to parameter of type 'number'.
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
// getUpper(4); // Argument of type 'number' is not assignable to parameter of type 'string'.
getUpper("krishna");
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "test";
};
loginUser("k", "k@k.com");
/// function getValue(myVal: number): true | "200 OK"
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var stattus = getValue(10);
var getHello = function (s) {
    return "";
};
/// const heros: string[]
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3];
heros.map(function (hero) {
    // return 1; // Type 'number' is not assignable to type 'string'.
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
