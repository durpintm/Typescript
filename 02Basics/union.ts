let score: number | string = 44;

score = "fifty";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let durpin: User | Admin = { name: "durpin", id: 444 };

durpin = { username: "dt", id: 555 };

// function getDBId(id: number | string) {
//   // making some api calls
//   console.log(`DB Id is : ${id}`);
// }

getDBId(8);
getDBId("4");

function getDBId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// array

const data: number[] = [1, 2, 3, 4, 5];
const data2: string[] = ["w", "r"];

// const data3: string[] | number[] = [1, "q"];

const data3: (string | number)[] = [1, "q"];

let pi: 3.14 = 3.14;

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew";
