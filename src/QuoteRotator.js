import React, { useState, useEffect } from "react";
import quotes from "./quotes";

function QuoteRotator() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);

    const cycle = () => {
      const fadeOutTimeout = setTimeout(() => setFade(false), 1000);

      const changeQuoteTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setFade(true);
        cycle();
      }, 2000);

      return () => {
        clearTimeout(fadeOutTimeout);
        clearTimeout(changeQuoteTimeout);
      };
    };

    const cleanup = cycle();

    return cleanup;
  }, []);

  return (
    <blockquote
      className="blockquote text-center my-4 quote-rotator"
      style={{
        opacity: fade ? 1 : 0,
        transition: "opacity 1s ease-in-out",
        minHeight: "3em",
      }}
    >
      <p className="mb-0 fst-italic">{quotes[index]}</p>
    </blockquote>
  );
}

export default QuoteRotator;
