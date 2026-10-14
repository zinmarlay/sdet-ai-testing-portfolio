import { test, expect, type Page } from "@playwright/test";
import { caseInsensitve, searchData } from "../test-data/search-data.js";

async function setupSearchPage(page: Page) {
  await page.setContent(`
    <label for="search">Search</label>
    <input id="search" type="text">

    <ul id="employeeList"></ul>

    <script>
      const employees = ["Alice", "Bob", "Charlie", "David"];

      const searchInput = document.getElementById("search");
      const employeeList = document.getElementById("employeeList");

      function renderEmployees(keyword = "") {
      const normalizedKeyword = keyword.trim().toLowerCase();
        const results = employees.filter((name) =>
          name.toLowerCase().includes(normalizedKeyword)
        );

        employeeList.innerHTML = "";

        if (results.length === 0) {
          employeeList.innerHTML = "<li>No results found</li>";
          return;
        }

        results.forEach((name) => {
          const li = document.createElement("li");
          li.textContent = name;
          employeeList.appendChild(li);
        });
      }

      searchInput.addEventListener("input", (event) => {
        renderEmployees(event.target.value);
      });

      renderEmployees();
    </script>
  `);
}

test.beforeEach(async ({ page }) => {
  await setupSearchPage(page);
});
test("TC-001:Search Exact Match", async ({ page }) => {
  page.getByLabel("Search").fill(searchData.exactMatch);
  await expect(page.getByRole("listitem")).toHaveText(["Alice"]);
});

test("TC-002: Search with No Results", async ({ page }) => {
  await page.getByLabel("Search").fill(searchData.noMatch);
  await expect(page.getByRole("listitem")).toHaveText("No results found");
});

test("TC-003: Empty Search Shows All Employees", async ({ page }) => {
  await page.getByLabel("Search").fill(searchData.emptyKeyword);
  await expect(page.getByRole("listitem")).toHaveCount(4);
  await expect(page.getByRole("listitem")).toHaveText([
    "Alice",
    "Bob",
    "Charlie",
    "David",
  ]);
});

test("TC-004: Case-Insensitive Search", async ({ page }) => {
  const searchKeyword = caseInsensitve;
  for (const keyword of searchKeyword) {
    await page.getByLabel("Search").fill(keyword);
    await expect(page.getByRole("listitem")).toHaveText("Alice");
  }
});

test("TC-005:Partial Match Search", async ({ page }) => {
  await page.getByLabel("Search").fill(searchData.partialMatch);
  await expect(page.getByRole("listitem")).toHaveText(["Charlie"]);
});

test("TC-006:Search with Leading and Trailing Spaces", async ({ page }) => {
  await page.getByLabel("Search").fill(searchData.whitespace);
  await expect(page.getByRole("listitem")).toHaveText(["Alice"]);
});

test("TC-007: Search with Special Characters", async ({ page }) => {
  await page.getByLabel("Search").fill(searchData.specialCharacters);
  await expect(page.getByRole("listitem")).toHaveText(["No results found"]);
});

test.afterEach(async ({}, testInfo) => {
  console.log(`Test:${testInfo.title} | Status: ${testInfo.status}`);
});
