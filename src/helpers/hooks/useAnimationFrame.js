// Based off a tweet and codesandbox:
// https://mobile.twitter.com/hieuhlc/status/1164369876825169920
import { useEffect, useRef } from "react";
import { Window as window, Performance as performance } from "../server-safe-globals";

// Reusable component that also takes dependencies
export const useAnimationFrame = (cb, deps = []) => {
  const frame = useRef();
  const last = useRef(performance.now());
  const init = useRef(performance.now());

  const animate = () => {
    const now = performance.now();
    const time = (now - init.current) / 1000;
    const delta = (now - last.current) / 1000;
    // In seconds ~> you can do ms or anything in userland
    cb({ time, delta });
    last.current = now;
    frame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps); // Make sure to change it if the deps change
};

export default useAnimationFrame
