type TestStatus = "Passed" | "Failed" | "Skipped";

interface TestCase {
  id: number;
  name: string;
  status: TestStatus;
  duration: number;
}

const testCases: TestCase[] = [
  { id: 1, name: "Login", status: "Passed", duration: 120 },
  { id: 2, name: "Logout", status: "Failed", duration: 200 },
  { id: 3, name: "Search", status: "Passed", duration: 150 },
  { id: 4, name: "Payment", status: "Failed", duration: 300 },
  { id: 5, name: "Profile", status: "Skipped", duration: 0 },
];

interface TestSummary {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  failedNames: string[];
  totalDuration: number;
  passRate: number;
}

const createTestSummary = (tests: TestCase[]): TestSummary => {
  const passedTests = tests.filter((test) => test.status === "Passed");
  const failedTests = tests.filter((test) => test.status === "Failed");
  const skippedTests = tests.filter((test) => test.status === "Skipped");
  const failedNames = failedTests.map((test) => test.name);
  const totalDuration = tests.reduce((total, test) => total + test.duration, 0);
  const totalTest = tests.length;
  const passRate = totalTest === 0 ? 0 : (passedTests.length / totalTest) * 100;

  return {
    total: tests.length,
    passed: passedTests.length,
    failed: failedTests.length,
    skipped: skippedTests.length,
    failedNames,
    totalDuration,
    passRate,
  };
};

const testSummary = createTestSummary(testCases);
console.log(testSummary);
console.log(createTestSummary([]));
