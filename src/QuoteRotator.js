import React, { useState, useEffect } from "react";
import quotes from "./quotes";

function QuoteRotator() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => setFade(false), 1500);
    const changeQuoteTimeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
      setFade(true);
    }, 2000);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(changeQuoteTimeout);
    };
  }, [index]);

  return (
    <blockquote
      className="blockquote text-center my-4 quote-rotator"
      style={{
        opacity: fade ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        minHeight: "3em",
      }}
    >
      <p className="mb-0 fst-italic">{quotes[index]}</p>
    </blockquote>
  );
}

export default QuoteRotator;
