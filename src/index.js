import { useRef, useEffect } from 'react';

// Ref: https://overreacted.io/making-setinterval-declarative-with-react-hooks/

/**
 * Params
 * @param {function} callback - Custom logic function
 * @param {number|null} delay - Delayed millisecond, stop if null
 */

/**
 * Returns
 */

export default (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
