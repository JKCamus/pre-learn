/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-06-18 14:41:50
 * @LastEditors: camus
 * @LastEditTime: 2021-06-18 15:15:25
 */
import React, { ChangeEvent, useState } from "react";
import { Button, Input } from "antd";
import { useInterval } from "../../utils/utils";

export default function DemoUse() {
  const [count, setCount] = useState<number>(0);
  const [delay, setDelay] = useState<number>(1000);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useInterval(
    () => {
      setCount(count + 1);
    },
    isPlaying ? delay : null
  );
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDelay(Number(event.target.value));
  };
  return (
    <>
      <div style={{ margin: "0 auto", width: "100px" }}>
        <h1>{count}</h1>
        <Button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "pause" : "plays"}{" "}
        </Button>
        <p>
          <label>Delay: </label>
        </p>
        <Input onChange={handleChange} value={delay}></Input>
      </div>
    </>
  );
}
