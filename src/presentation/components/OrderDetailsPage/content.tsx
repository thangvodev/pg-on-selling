import React from "react";
import { Banner } from "./banner";
import { OrderDetails } from "./order-details";
import { FloatButtons } from "./float-buttons";

const content = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <div className="pb-[106px]">
        <OrderDetails />
      </div>
      <FloatButtons />
    </div>
  );
};

export default content;
