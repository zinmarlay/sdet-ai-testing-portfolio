import { test, expect } from "@playwright/test";

test("POST request should create a new post", async ({ request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        title: "SDET Learning",
        body: "Learning API Testing with Playwright",
        userId: 1,
      },
    },
  );

  expect(response.status()).toBe(201);

  const data = await response.json();

  expect(data.title).toBe("SDET Learning");
  expect(data.body).toBe("Learning API Testing with Playwright");
  expect(data.userId).toBe(1);
  expect(data.id).toBeTruthy();
});
