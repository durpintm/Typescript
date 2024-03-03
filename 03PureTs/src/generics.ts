const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(value: Type): Type {
  return value;
}

identityThree(2);
identityThree("hello");
identityThree(true);

function identityFour<T>(value: T): T {
  return value;
}

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "dd", type: 6 });

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
}

const getMoreProducts = <T>(products: T[]): T => {
  const myIndex = 5;
  return products[myIndex];
};
