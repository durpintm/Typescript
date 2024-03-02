// const user: (string | number)[] = [2, "dt", 4];

let user: [string, number, boolean];
user = ["dt", 12, true];

// order is important in tuple
// user2 = [12, true, "dt"];

let rgb: [number, number, number] = [222, 444, 555];

//not allowed
// let rgb: [number, number, number] = [222, 444, 555, 111];

type User = [number, string];
const newUser: User = [1234, "durpin"];
newUser[0] = 23445;
newUser[1] = "dtm";

// not allowed
// newUser.push(true);

export {};
