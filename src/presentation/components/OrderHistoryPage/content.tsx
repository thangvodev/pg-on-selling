import React from "react";
import { Statistics } from "./statistics";
import { OrderList } from "./order-list";

const content = () => {
  return (
    <div className="flex flex-col gap-[14px] p-[16px]">
      <Statistics />
      <OrderList />
    </div>
  );
};

export default content;
