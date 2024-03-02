function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

addTwo(2);

function getUpper(value: string) {
  return value.toUpperCase();
}

getUpper("data");

function signUpUser(username: string, email: string, isPaid: boolean) {}
signUpUser("durpin", "durpin@lco.dev", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("dtm", "dtm@google.com");

// function getValue(myval: number) {
//   if (myval > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

// const heroes = ["thor", "ironman", "spiderman", "hulk"];
const heroes = [1, 2, 3, 4];

// heroes.map((hero) => {
//   return `hero is ${hero}`;
// });

heroes.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(msg: string): void {
  console.log(msg);
}

function handleError(msg: string): never {
  throw new Error(msg);
}

export {};
