"use client"
import { useEffect, useState } from "react";


const useWindowSize = function () {
  const [size, setSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    setSize({
      height: window?.innerHeight || 0,
      width: window?.innerWidth || 0,
    })
  }, [])

  useEffect(() => {
    window?.addEventListener("resize", () => {
      setSize({
        height: window?.innerHeight || 0,
        width: window?.innerWidth || 0,
      })
    });

    return () => {
      window?.removeEventListener("resize", () => { });
    };
  }, [size]);

  return size;
};

export default useWindowSize;
