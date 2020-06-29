import { useRef, useEffect } from 'react'

export const useValueRef = <T extends Object>(val: T) => {
  const ref = useRef(val);
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref;
}