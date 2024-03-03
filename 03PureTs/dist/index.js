"use strict";
// tsc -w => for watch mode in ts
// class User {
//   email: string;
//   name: string;
//   private readonly city: string = "Toronto";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name // private userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Toronto";
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getEmail() {
        return `email : ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(value) {
        if (value <= 1) {
            throw new Error("Course count should me more than 1");
        }
        this._courseCount = value;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this.courseCount++;
    }
}
const durpin = new User("d@d.com", "durpintm");
// durpin.city = "toronto";
