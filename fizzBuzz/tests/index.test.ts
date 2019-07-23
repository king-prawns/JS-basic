import { FizzBuzz, isMultiple } from "../index";

describe("FizzBuzz", () => {
  it(`Should return "FizzBuzz"
      when the number is evenly divisible by 15,
      "Fizz" when it's evenly divisible by 3 and
      "Buzz" when it's evenly divisible by 5.`, () => {
    expect(FizzBuzz(1)).toBe(1);
    expect(FizzBuzz(3)).toBe("Fizz");
    expect(FizzBuzz(5)).toBe("Buzz");
    expect(FizzBuzz(7)).toBe(7);
    expect(FizzBuzz(15)).toBe("FizzBuzz");
    expect(FizzBuzz(30)).toBe("FizzBuzz");
    expect(FizzBuzz(33)).toBe("Fizz");
  });
});

describe("isMultiple", () => {
  it(`Should return true if the number is multiple of a given argument.
      Otherwise it should return false.`, () => {
    expect(isMultiple(10, 5)).toBe(true);
    expect(isMultiple(10, 2)).toBe(true);
    expect(isMultiple(60, 20)).toBe(true);
    expect(isMultiple(65, 15)).toBe(false);
    expect(isMultiple(319, 4)).toBe(false);
    expect(isMultiple(9, 10)).toBe(false);
  });
});
