import { useEffect, useRef } from "react";

export const useMousePosition = () => {
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => {
      position.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};
