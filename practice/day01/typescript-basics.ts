type TestStatus = "Passed" | "Failed" | "Skipped";

interface TestCase {
  id: number;
  name: string;
  status: TestStatus;
  duration: number;
  errorMessage?: string;
}

const testCases: TestCase[] = [
  {
    id: 1,
    name: "Login",
    status: "Passed",
    duration: 120,
  },
  {
    id: 2,
    name: "Logout",
    status: "Failed",
    duration: 200,
    errorMessage: "Expected 200 but received 500",
  },
  {
    id: 3,
    name: "Payment",
    status: "Passed",
    duration: 150,
  },
];

const getFailedTests = (tests: TestCase[]): TestCase[] => {
  return tests.filter((test) => test.status === "Failed");
};

const failedTests = getFailedTests(testCases);

console.log("Failed Tests:", failedTests);
console.log("Failed Count:", failedTests.length);
