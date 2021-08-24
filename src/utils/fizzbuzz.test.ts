import { fizzbuzz } from "./fizzbuzz";

test("tests the function produces the right response in sequence", () => {
  expect(fizzbuzz(1)).toBe("1");
  expect(fizzbuzz(2)).toBe("2");
  expect(fizzbuzz(3)).toBe("Fizz");
  expect(fizzbuzz(5)).toBe("Buzz");
  expect(fizzbuzz(15)).toBe("Fizz Buzz");
  expect(fizzbuzz(35)).toBe("Buzz");
  expect(fizzbuzz(36)).toBe("Fizz");
  expect(fizzbuzz(37)).toBe("37");
});
