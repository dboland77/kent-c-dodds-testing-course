const { sumAsync, subtractAsync } = require("./maths");

test("sumAsync adds numbers asynchronously", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});


test("subtractAsync subtracts numbers asynchronously", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

// Async on this test function will also work for synchronous code
async function test(title, callback) {
  try {
    await callback();
    console.log(`√ ${title}`);
  } catch (error) {
    console.error(`x ${title}`);
    console.error(error);
  }
}
