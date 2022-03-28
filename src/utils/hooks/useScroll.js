import { useEffect, useRef } from "react";
import useSize from '@react-hook/size'
import { useEventListener } from "@/utils/hooks/useEventListener";
import { Document as document, Window as window } from "@/utils/server-safe-globals";
import useStore from '@/utils/store'
import lerp from '@/utils/lerp'

// set height of the body
const setSize = ({ scrollable }) => {
  // set the height of the body in order to keep the scrollbar on the page
  document.body.style.height = `${scrollable.scrollHeight}px`;
};

// set base styles for container
const setStyle = ({ main }) => {
  if (!main) return;
  main.style.position = "fixed";
  main.style.width = main.style.height = "100%";
  main.style.top = main.style.left = 0;
  main.style.overflow = "hidden";
};

// update the scroll value target
const onScroll = (event, scrollValues) => {
  scrollValues.target = window.pageYOffset || document.documentElement.scrollTop;
};

/**
 * Attach smooth scroll to the passed content reference
 * @param {React.Ref} scrollable the content container that will be scrolled
 * @param {React.Ref} container outer fixed container
 * @param {number} smoothness how reactive the scroll is
 */
export const useScroll = ({ scrollable, container, smoothness = 0.1 }) => {
  const scrollValues = useRef({ current: 0, target: 0, limit: 1000 });
  const scrollPercentage = useStore(state => state.scrollPercentage)
  const scrollProgress = useStore(state => state.scrollProgress)
  const [width, height] = useSize(scrollable)

  useEventListener("scroll", (e) => onScroll(e, scrollValues.current));
  useEventListener("resize", () => setSize({ scrollable: scrollable.current }));
  useEventListener("touchmove", (e) => e.preventDefault)

  /**
   * Setup
   */
  useEffect(() => {
    // set body height
    setSize({ scrollable: scrollable.current });
    // set container styles
    setStyle({ main: container.current });

    window.onbeforeunload = function() {
      window.scrollTo(0, 0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container, scrollable, width, height]);

  /**
   * Loop
   */
  const render = () => {
    const { current, target } = scrollValues?.current || {}
    // since javascript is bad at handling small numbers
    if (current < 0.01) {
      scrollValues.current.current = 0;
    }

    // smooth lerped scroll
    scrollValues.current.current = lerp(
      current,
      target,
      smoothness
    );

    // translates the scrollable element
    if (scrollable.current) {
      if (Math.round(target) !== Math.round(current)) {
        scrollable.current.style.transform = `translate3d(0, -${current}px, 0)`;
      }

      const percentage = (current / (scrollable.current.scrollHeight - window.innerHeight)) * 100
      scrollPercentage.current = Math.round(percentage)
      scrollProgress.current = current
    }

    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);
};
