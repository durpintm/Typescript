// const User = {
//   name: "durpin",
//   email: "durpin@lco.dev",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "dtm", isPaid: false, email: "dtm@google.com" };
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "react", price: 499 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "dd", email: "dd@dd.com", isActive: true };
// }

// createUser({ name: "dd", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // ? for optional
};

let myUser: User = {
  _id: "12345",
  name: "d",
  email: "d@d.com",
  isActive: false,
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "durpin@durpin.com";
// myUser._id = "34255"; // _id is readonly
export {};
