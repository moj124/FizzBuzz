import { fizzbuzz } from "../utils/fizzbuzz";
import { useState } from "react";

export function Fizzbuzz(): JSX.Element {
  const [state, setState] = useState<number[]>([1]);

  const handleNext = () => setState([...state, state[state.length - 1] + 1]);

  const handleClear = () => setState([1]);

  const sequence = state.map((element) => fizzbuzz(element));

  return (
    <>
      <h1> Fizz Buzz </h1>
      <p> The current sequence is: {sequence.join(", ")}</p>
      <button onClick={handleNext}>Next</button>
      <button onClick={handleClear}>Clear</button>
    </>
  );
}
