/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-06-18 14:32:35
 * @LastEditors: camus
 * @LastEditTime: 2021-06-19 10:36:28
 */
import { useEffect, useRef,useState } from "react";
export const useInterval = function (
  callback: () => void,
  delay: number | null
) {
  const saveCallback = useRef(callback);
  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    if (delay === null) {
      return;
    }
    const id = setInterval(() => saveCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
/**
 * @description: update 生命周期
 * @param {*} effect
 * @param {*} deps
 */
export const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isMounted = useRef(false);
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};
