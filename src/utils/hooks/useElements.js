import each from "lodash/each";
import { useEffect } from "react";
import { Document as document } from "@/utils/server-safe-globals";

/**
 * Pass an object with selectors and this hooks returns any matching DOM elements
 * @returns {object}
 */
export const useElements = ({ selector, selectors }) => {
  useEffect(() => {
    each(selectors, (value, key) => {
      if (
        value instanceof window.HTMLElement ||
        value instanceof window.NodeList ||
        Array.isArray(value)
      ) {
        // if value is already an actual element or array of any type, save it as is
        selectors[key] = value;
      } else {
        // if value is a selector, get the element and save that
        selectors[key] = document.querySelectorAll(value);

        if (selectors[key].length === 0) {
          selectors[key] = null;
        } else if (selectors[key].length === 1) {
          selectors[key] = document.querySelector(value);
        }
      }
    });
  }, [selectors]);
  return { element: document.querySelector(selector), elements: selectors };
};

export default useElements;
