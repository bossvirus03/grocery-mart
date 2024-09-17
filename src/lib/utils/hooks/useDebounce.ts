import { useEffect, useRef, useState } from "react";

const useDebounce = (value: any, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const timerRef = useRef();

  useEffect(() => {
timerRef.current = setTimeout(() => setDebouncedValue(value), delay) as any;

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
};
export default useDebounce;
