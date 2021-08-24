export function fizzbuzz(number: number): string {
  return number % 15 === 0
    ? "Fizz Buzz"
    : number % 5 === 0
    ? "Buzz"
    : number % 3 === 0
    ? "Fizz"
    : number.toString();
}
