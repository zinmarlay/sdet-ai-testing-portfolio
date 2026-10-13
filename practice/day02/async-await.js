const loginTest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Login Passed");
    }, 2000);
  });
};

const runTest = async () => {
  console.log("1. Test Started");

  const result = await loginTest();

  console.log(`2. ${result}`);
  console.log("3. Test Finished");
};

runTest();
