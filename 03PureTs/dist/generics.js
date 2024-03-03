"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(value) {
    return value;
}
identityThree(2);
identityThree("hello");
identityThree(true);
function identityFour(value) {
    return value;
}
identityFour({ brand: "dd", type: 6 });
