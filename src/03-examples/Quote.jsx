import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ author, quote }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, hight: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [quote]);

  return (
    <>
      <div>
        <blockquote className="blockquote text-end" style={{ display: "flex" }}>
          <p ref={pRef}>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      </div>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
