import { test as base, expect } from "@playwright/test";
import { loginData } from "../test-data/login-data.js";

type LoginFixutes = {
  loginUser: {
    email: string;
    password: string;
  };
};

const test = base.extend<LoginFixutes>({
  loginUser: async ({}, use) => {
    await use(loginData.validUser);
  },
});

export { test, expect };
