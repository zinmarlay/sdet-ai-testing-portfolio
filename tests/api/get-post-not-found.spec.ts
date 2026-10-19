import { test, expect } from "@playwright/test";

test("GET request should return 404 for a missing post", async ({
  request,
}) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/999999",
  );

  expect(response.status()).toBe(404);
});
