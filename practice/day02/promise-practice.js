const paymentTest = new Promise((resolve, reject) => {
  const paymentSuccess = true;
  if (paymentSuccess) {
    resolve("Payment Passed");
  } else {
    reject("Payment Failed");
  }
});
paymentTest
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
