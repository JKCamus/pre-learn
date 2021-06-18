/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-06-18 14:32:35
 * @LastEditors: camus
 * @LastEditTime: 2021-06-18 14:41:17
 */
import { useEffect, useRef } from "react";
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
