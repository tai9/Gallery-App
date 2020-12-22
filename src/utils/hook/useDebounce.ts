import { useState } from "react";

export const useDebounce = (): Function => {
  const [typingTimeout, setTypingTimeout] = useState<number>();

  const debounce = (func: Function, wait: number = 1000) => {
    clearTimeout(typingTimeout);
    const timeout = setTimeout(() => func(), wait);
    setTypingTimeout(timeout);
  };

  return debounce;
};
