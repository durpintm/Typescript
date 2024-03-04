"use strict";
function detectTypes(value) {
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    return value + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide Id");
        return;
    }
    id.toLowerCase();
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    {
        pet;
        return "Bird Food";
    }
}
