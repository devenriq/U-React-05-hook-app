import { useFetch } from "../hooks/useFetch.js";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes"
  );

  const { author, quote } = !!data && data[0];

  console.log(data, isLoading, hasError);

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
    </>
  );
};
