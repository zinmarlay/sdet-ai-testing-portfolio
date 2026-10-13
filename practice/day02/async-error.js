const loginTest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Invalid Credentials"));
    }, 1000);
  });
};

const runTest = async () => {
  try {
    console.log("Test started");
    const result = await loginTest();
    console.log(result);
  } catch (error) {
    console.log(`Test Failed: ${error.message}`);
  } finally {
    console.log("Test Finished");
  }
};

runTest();
