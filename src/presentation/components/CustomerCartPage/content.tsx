import React from "react";
import { AddCustomer } from "./add-customer";
import { ProductList } from "./product-list";
import { OrderFloat } from "./order-float";

const content = () => {
  return (
    <div className="flex flex-col gap-[12px] px-[16px] pt-[12px]">
      <AddCustomer />
      <ProductList />
      <OrderFloat />
    </div>
  );
};

export default content;
