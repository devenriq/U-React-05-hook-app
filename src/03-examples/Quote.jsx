export const Quote = ({ author, quote }) => {
  return (
    <div>
      <blockquote className="blockquote text-end">
        <p>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
    </div>
  );
};
