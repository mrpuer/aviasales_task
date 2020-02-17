import React from 'react';

export default (callback: () => void, delay: number | null): React.RefObject<number> => {
  const intervalRef = React.useRef<number>(null);
  const callbackRef = React.useRef<() => void>(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect((): (() => void) => {
    if (typeof delay === 'number') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      intervalRef.current = window.setInterval(() => callbackRef.current(), delay);
    }
    return (): void => window.clearInterval(intervalRef.current ? intervalRef.current : undefined);
  }, [delay]);

  return intervalRef;
};
