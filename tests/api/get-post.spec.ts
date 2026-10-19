import { test, expect } from "@playwright/test";
test("GET request should return post data", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );
  expect(response.status()).toBe(200);
  const data = await response.json();

  expect(data.id).toBe(1);
  expect(data.title).toBeTruthy();

  expect(typeof data.id).toBe("number");
  expect(typeof data.title).toBe("string");
  expect(typeof data.userId).toBe("number");

  expect(data).toHaveProperty("id");
  expect(data).toHaveProperty("userId");
  expect(data).toHaveProperty("title");
  expect(data).toHaveProperty("body");
});
