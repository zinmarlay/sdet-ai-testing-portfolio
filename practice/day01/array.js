const testCases = [
  {
    id: 1,
    name: "Login Success",
    expected: 200,
    actual: 200,
  },
  {
    id: 2,
    name: "Unauthorized Access",
    expected: 401,
    actual: 401,
  },
  {
    id: 3,
    name: "Invalid Request",
    expected: 400,
    actual: 500,
  },
];

let passedCount = 0;
let failedCount = 0;

for (const testCase of testCases) {
  const { name, expected, actual } = testCase;

  if (expected === actual) {
    console.log(`${name}: PASSED`);
    passedCount++;
  } else {
    console.log(`${name}: FAILED`);
    failedCount++;
  }
}

console.log(`Passed: ${passedCount}`);
console.log(`Failed: ${failedCount}`);
