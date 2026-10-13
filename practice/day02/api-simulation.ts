interface LoginResponse {
  status: number;
  message: string;
  token: string;
}

const loginApi = (): Promise<LoginResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        message: "Login Successful",
        token: "abc123",
      });
    }, 1000);
  });
};

const runLoginTest = async (): Promise<void> => {
  try {
    console.log("Login Test Started");
    const response = await loginApi();
    if (response.status === 200 && response.token) {
      console.log("Test Passed");
      console.log(response.message);
    } else {
      throw new Error("Login Test Failed");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Test Failed: ${error.message}`);
    }
  } finally {
    console.log("Login Test Finished");
  }
};

runLoginTest();
