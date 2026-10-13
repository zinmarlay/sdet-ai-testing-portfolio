const runLoginTest = (callback) => {
  console.log("1. Login Test Started");

  setTimeout(() => {
    console.log("2. Login Test Finished");
    calltback("Passed");
  }, 2000);
};

const showResult = (status) => {
  console.log(`3. Test Status: ${status}`);
};

runLoginTest(showResult);
