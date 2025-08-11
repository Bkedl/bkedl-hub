import React, { useEffect, useState } from 'react';
import quotes from './quotes';

function QuoteRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % quotes.length);
    }, 5000); // change every 5 second

    return () => clearInterval(interval);
  }, []);

  return (
    <blockquote className="blockquote text-center my-4">
      <p className="mb-0">{quotes[index]}</p>
    </blockquote>
  );
}

export default QuoteRotator;