import React from "react";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import { SpinPopup } from "./spin-popup";

export const CheckoutFloat = () => {
  return (
    <div
      className="fixed inset-x-0 bottom-0 flex justify-between bg-white px-[16px] pb-[24px] pt-[12px]"
      style={{ boxShadow: "0px -4px 24px 0px #A2A2A21F" }}
    >
      <div className="flex flex-col gap-[8px]">
        <div className="text-xs font-medium">Tổng tiền</div>
        <div className="text-[18px] font-semibold leading-none text-error3">
          {formatCurrency(240000)}
        </div>
      </div>
      <SpinPopup>
        {({ open }) => (
          <Button
            text={
              <div className="text-base font-medium text-white">Xác nhận</div>
            }
            className="flex flex-none items-center justify-center rounded-[40px] px-[48px]"
            style={{
              background: "linear-gradient(180deg, #6AAEF2 0%, #4884FF 100%)",
            }}
            onClick={open}
          />
        )}
      </SpinPopup>
    </div>
  );
};
