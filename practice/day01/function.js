// Test Data
const testCases = [
  {
    name: "Login Test",
    expected: 200,
    actual: 200,
  },
  {
    name: "Logout Test",
    expected: 200,
    actual: 500,
  },
  {
    name: "Search Test",
    expected: 200,
    actual: 200,
  },
];

// Function Declaration
function validateTest(expected, actual) {
  return expected === actual;
}

// Arrow Function
const getTestStatus = (isPassed) => {
  return isPassed ? "PASSED" : "FAILED";
};

// Execute Tests
for (const testCase of testCases) {
  const { name, expected, actual } = testCase;

  const result = validateTest(expected, actual);

  const status = getTestStatus(result);

  console.log(`${name}: ${status}`);
}
