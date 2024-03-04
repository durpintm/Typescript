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
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
}
const getMoreProducts = (products) => {
    const myIndex = 5;
    return products[myIndex];
};
// function anotherFunction<T, U extends number>(
//   valueOne: T,
//   valueTwo: U
// ): object {
//   return { valueOne, valueTwo };
// }
function anotherFunction(valueOne, valueTwo) {
    return { valueOne, valueTwo };
}
// anotherFunction(3, "4");
// anotherFunction(3, 0.46);
anotherFunction(3, { connection: "", username: "", password: "" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
