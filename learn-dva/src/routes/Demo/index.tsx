/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2021-06-18 14:53:03
 * @LastEditors: camus
 * @LastEditTime: 2021-09-01 20:03:51
 */
import React, { memo } from "react";
import UseIntervalTest from "../../components/UseIntervalTest";
import SlotDemo from "../SlotDemo";

const TestHeader = () => {
  return <div>TestHeader Slot Consumer</div>;
};
const TestFooter = () => {
  return <div>TestFooter Slot Consumer</div>;
};

const Demo = (props) => {
  return (
    <div>
      <UseIntervalTest></UseIntervalTest>
      <hr />Ï
      <SlotDemo header={<TestHeader />} footer={<TestFooter />}>
        <div>----</div>
      </SlotDemo>
    </div>
  );
};
export default memo(Demo);
