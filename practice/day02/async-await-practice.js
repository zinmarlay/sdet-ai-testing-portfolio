const paymentTest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Payment Passed");
    }, 1000);
  });
};

const runTest = async () => {
  console.log("Test Started");
  const result = await paymentTest();
  console.log(`${result}`);
  console.log("Test Finished");
};

runTest();
