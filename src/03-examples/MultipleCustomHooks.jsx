import { useCounter } from "../hooks/useCounter.js";
import { useFetch } from "../hooks/useFetch.js";

import { Quote } from "./Quote.jsx";
import { QuoteLoading } from "./QuoteLoading.jsx";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? <QuoteLoading /> : <Quote quote={quote} author={author} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => {
          increment(1);
        }}
      >
        Next quote
      </button>
    </>
  );
};
