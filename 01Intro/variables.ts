//string
let greetings: string = "Good morning!";

greetings.toUpperCase();
console.log(greetings);

//number
let userId: number = 4444; //555.55
let id = 4444; //same as above

//boolean
let isLoggedIn: boolean = false;

//any
// add noImplicitAny in tsconfig
// let hero;
let hero: string;

function getHero() {
  return "ironman";
  // return true;
}

hero = getHero();

export {};
