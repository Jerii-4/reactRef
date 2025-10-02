import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log(size);
  return (
    <>
      <h1>Window Size</h1>
      <h2>{size}px</h2>
    </>
  );
};

export default UseEffectCleanup;
