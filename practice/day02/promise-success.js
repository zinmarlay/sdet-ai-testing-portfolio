const loginTest = new Promise((resolve, reject) => {
  const loginSuccess = true;
  if (loginSuccess) {
    resolve("Login Passed");
  } else {
    reject("Login Failed");
  }
});

loginTest
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
