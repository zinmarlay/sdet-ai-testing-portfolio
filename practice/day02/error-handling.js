try {
  console.log(`1.Test Started`);
  throw new Error("Login Failed");
  console.log("2.Test Passed");
} catch (error) {
  console.log(`3.Error ${error.message}`);
} finally {
  console.log("4.Test Finished");
}
