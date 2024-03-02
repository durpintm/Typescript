const User = {
  name: "durpin",
  email: "durpin@lco.dev",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "dtm", isPaid: false, email: "dtm@google.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "react", price: 499 };
}

export {};
