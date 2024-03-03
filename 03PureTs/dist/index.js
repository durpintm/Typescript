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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Toronto";
        this.email = email;
        this.name = name;
    }
}
const durpin = new User("d@d.com", "durpintm");
// durpin.city = "toronto";
