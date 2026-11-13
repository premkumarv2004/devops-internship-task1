
const test = require("node:test");
const assert = require("node:assert");

test("Application should return success message", () => {
  const message = "Node.js Application Running Successfully!";

  assert.strictEqual(
    message,
    "Node.js Application Running Successfully!"
  );
});
