import React from 'react';

export default function useInterval(callback, delay) {
  const intervalRef = React.useRef();
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(() => callbackRef.current(), delay);

      return () => window.clearInterval(intervalRef.current);
    }
    return null;
  }, [delay]);

  return intervalRef;
}
