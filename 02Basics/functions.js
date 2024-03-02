"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello";
}
addTwo(2);
function getUpper(value) {
    return value.toUpperCase();
}
getUpper("data");
function signUpUser(username, email, isPaid) { }
signUpUser("durpin", "durpin@lco.dev", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("dtm", "dtm@google.com");
// function getValue(myval: number) {
//   if (myval > 5) {
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "";
};
// const heroes = ["thor", "ironman", "spiderman", "hulk"];
var heroes = [1, 2, 3, 4];
// heroes.map((hero) => {
//   return `hero is ${hero}`;
// });
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(msg) {
    console.log(msg);
}
function handleError(msg) {
    throw new Error(msg);
}
