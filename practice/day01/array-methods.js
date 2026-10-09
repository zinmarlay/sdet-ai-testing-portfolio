const testCases = [
  { id: 1, name: "Login", status: "Passed", duration: 120 },
  { id: 2, name: "Logout", status: "Failed", duration: 200 },
  { id: 3, name: "Search", status: "Passed", duration: 150 },
  { id: 4, name: "Payment", status: "Failed", duration: 300 },
  { id: 5, name: "Profile", status: "Passed", duration: 100 },
];

// 1. map()
const testNames = testCases.map((testCase) => testCase.name);

console.log("All Tests:", testNames);

// 2. filter()
const failedTests = testCases.filter(
  (testCase) => testCase.status === "Failed",
);

console.log("Failed Tests:", failedTests);

// 3. find()
const paymentTest = testCases.find((testCase) => testCase.name === "Payment");

console.log("Payment Test:", paymentTest);

// 4. reduce()
const totalDuration = testCases.reduce(
  (total, testCase) => total + testCase.duration,
  0,
);

console.log("Total Duration:", totalDuration);

// 5. Method Chaining
const failedNames = testCases
  .filter((testCase) => testCase.status === "Failed")
  .map((testCase) => testCase.name);

console.log("Failed Test Names:", failedNames);
