const paymentTest = () => {
  return new Promise((resolve, reject) => {
    const pamentSuccess = false;
    if (pamentSuccess) {
      resolve("Payment Success");
    } else {
      reject(new Error("Payment Failed"));
    }
  });
};

const runTest = async () => {
  try {
    console.log("Test Started");
    const result = await paymentTest();
    console.log(result);
  } catch (error) {
    console.log(`Test Failed :${error.message}`);
  } finally {
    console.log("Test Finished");
  }
};

runTest();
