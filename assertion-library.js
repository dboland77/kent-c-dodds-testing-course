const { sum, subtract } = require("./maths");

test("sum adds numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});


test("subtract subtracts numbers", () => {
  const result = subtract(7, 3);
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

function test(title, callback) {
  try {
    callback();
    console.log(`√ ${title}`);
  } catch (error) {
    console.error(`x ${title}`);
    console.error(error);
  }
}
