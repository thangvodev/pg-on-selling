import React from "react";
import { OrderForm } from "./order-form";
import { CheckoutFloat } from "./checkout-float";

const content = () => {
  return (
    <div className="relative pb-[100px]">
      <OrderForm />
      <CheckoutFloat />
    </div>
  );
};

export default content;
