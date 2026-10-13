const runTest = (callback, testName) => {
  console.log(`Test: ${testName}`);
  callback("Passed");
};

const showResult = (status) => {
  console.log(`Result: ${status}`);
};

runTest(showResult, "login");
