import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, reset, decrement } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button className="" onClick={() => increment(2)}>
        +1
      </button>
      <button className="" onClick={reset}>
        reset
      </button>
      <button className="" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};
