const { test, expect, request } = require("@playwright/test");

const userPayload = {
  postId: 1,
  id: 1,
  name: "MOses",
  email: "gmail@gardner.biz",
  body: "Jesus Is Great❤️😇🏆🙏🏻😘",
};

test("GET REQUEST", async () => {
  const apiRequest = await request.newContext();

  const apiResponse = await apiRequest.get(
    "https://jsonplaceholder.typicode.com/comments"
  );

  expect(apiResponse.ok()).toBeTruthy();
  const json = await apiResponse.json();
  console.log(json);
});

test("POST REQUEST", async () => {
  const apiRequest = await request.newContext();

  const apiResponse = await apiRequest.post(
    "https://jsonplaceholder.typicode.com/comments",
    {
      data: userPayload,
    }
  );

  expect(apiResponse.ok()).toBeTruthy();
  const json = await apiResponse.json();
  console.log(json);
});
