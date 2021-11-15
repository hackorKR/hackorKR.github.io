import React, { useState, useEffect } from "react";

const useWindowScroll = () => {
  const [windowScroll, setWindowScroll] = useState({
    scrollX: window.scrollX,
    scrollY: window.scrollY,
  });

  const onScroll = () => {
    setWindowScroll({ scrollX: window.scrollX, scrollY: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return windowScroll;
};

export default useWindowScroll;
