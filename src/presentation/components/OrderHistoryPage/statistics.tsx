import React from "react";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";
import NetGainIcon from "../icons/NetGainIcon";

export const Statistics = () => {
  return (
    <div className="flex gap-[8px]">
      {/* Order */}
      <div className="flex flex-1 flex-col gap-[4px] rounded-[12px] bg-[#E4F2FF] px-[12px] py-[10px]">
        <div className="flex items-center gap-[4px]">
          <div className="flex size-[20px] items-center justify-center rounded-full bg-white">
            <ShoppingBagIcon className="size-[12px] text-infor3" />
          </div>
          <div className="text-2xs font-normal text-neutral8">Đơn hàng</div>
        </div>
        <div className="text-base font-medium text-neutral8">123</div>
      </div>
      {/* Net gain */}
      <div className="flex flex-1 flex-col gap-[4px] rounded-[12px] bg-[#FFEDF3] px-[12px] py-[10px]">
        <div className="flex items-center gap-[4px]">
          <div className="flex size-[20px] items-center justify-center rounded-full bg-white">
            <NetGainIcon className="size-[12px] text-[#FF8FB5]" />
          </div>
          <div className="text-2xs font-normal text-neutral8">Doanh thu</div>
        </div>
        <div className="text-base font-medium text-neutral8">40</div>
      </div>
    </div>
  );
};
