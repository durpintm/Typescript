interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

const durpin: User = {
  dbId: 11,
  email: "d@d.com",
  userId: 2222,
  startTrial: () => {
    return "Trial started!";
  },

  getCoupon: (name: "hello25", off: 25) => {
    return 10;
  },
};

durpin.email = "dd@dd.com";
