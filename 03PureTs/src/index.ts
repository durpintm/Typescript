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
  private _courseCount = 1;
  readonly city: string = "Toronto";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {
    this.email = email;
    this.name = name;
  }

  private deleteToken() {
    console.log("Token deleted");
  }

  get getEmail(): string {
    return `email : ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(value: number) {
    if (value <= 1) {
      throw new Error("Course count should me more than 1");
    }
    this._courseCount = value;
  }
}

const durpin = new User("d@d.com", "durpintm");
// durpin.city = "toronto";
