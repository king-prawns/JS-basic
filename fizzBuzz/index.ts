const isMultiple = (num: number, mod: number): boolean => {
  return num % mod === 0;
};

const FizzBuzz = (num: number): string | number => {
  switch (true) {
    case isMultiple(num, 15): // 15 is minimum common multiple beetween 3 and 5
      return "FizzBuzz";
    case isMultiple(num, 3):
      return "Fizz";
    case isMultiple(num, 5):
      return "Buzz";
    default:
      return num;
  }
};

const main = [...Array(100)].map((_, i) => FizzBuzz(i + 1));

export { FizzBuzz, isMultiple };
