// Test Information
const testName = "Login Test";
const expectedStatus = 200;

let actualStatus = null;
let testStatus = "Pending";

// Before Test
console.log("Before Test");
console.log(testName);
console.log(testStatus);
console.log(actualStatus);

// Simulate Test Execution
actualStatus = 200;

if (actualStatus === expectedStatus) {
  testStatus = "Passed";
} else {
  testStatus = "Failed";
}

// After Test
console.log("After Test");
console.log(testStatus);
console.log(actualStatus);
