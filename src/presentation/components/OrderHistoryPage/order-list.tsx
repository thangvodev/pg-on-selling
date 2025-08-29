import React from "react";
import { SearchBarNoPopup } from "../common/search-bar";
import { Tags } from "./tags";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "../common/button";
import SearchIcon from "../icons/SearchIcon";

export const OrderList = () => {
  return (
    <div className="flex flex-col gap-[14px]">
      <SearchBarNoPopup
        className="h-[44px] rounded-[100px] bg-white text-base"
        placeholder="Tìm sản phẩm"
        suffixIcon={
          <Button.Icon
            icon={<SearchIcon className="text-secondary4" />}
            className="size-[26px] bg-white p-[6px]"
          />
        }
      />
      <div className="flex flex-col gap-[12px]">
        {/* Order */}
        <div
          className="flex flex-col gap-[8px] rounded-[12px] bg-white p-[12px]"
          style={{ boxShadow: "0px 4px 12px 0px #D0DAE01F" }}
        >
          <div className="flex items-center justify-between">
            <div className="text-xs font-normal text-neutral6">Đơn #1232</div>
            <Tags status="paid" />
          </div>
          <div className="text-sm font-normal">
            1x Chai nước lavie, 1 thùng sữa ABC
          </div>
          <div className="flex items-center gap-[4px]">
            <UserOutlined className="text-[14px] text-neutral6" />
            <div className="text-xs font-medium text-neutral8">
              Thu Hồng{" "}
              <span className="font-normal text-neutral6">(012343454)</span>
            </div>
          </div>
        </div>
        {/* Order */}
        <div
          className="flex flex-col gap-[8px] rounded-[12px] bg-white p-[12px]"
          style={{ boxShadow: "0px 4px 12px 0px #D0DAE01F" }}
        >
          <div className="flex items-center justify-between">
            <div className="text-xs font-normal text-neutral6">Đơn #1232</div>
            <Tags status="completed" />
          </div>
          <div className="text-sm font-normal">
            1x Chai nước lavie, 1 thùng sữa ABC
          </div>
          <div className="flex items-center gap-[4px]">
            <UserOutlined className="text-[14px] text-neutral6" />
            <div className="text-xs font-medium text-neutral8">
              Thu Hồng{" "}
              <span className="font-normal text-neutral6">(012343454)</span>
            </div>
          </div>
        </div>
        {/* Order */}
        <div
          className="flex flex-col gap-[8px] rounded-[12px] bg-white p-[12px]"
          style={{ boxShadow: "0px 4px 12px 0px #D0DAE01F" }}
        >
          <div className="flex items-center justify-between">
            <div className="text-xs font-normal text-neutral6">Đơn #1232</div>
            <Tags status="paid" />
          </div>
          <div className="text-sm font-normal">
            1x Chai nước lavie, 1 thùng sữa ABC
          </div>
          <div className="flex items-center gap-[4px]">
            <UserOutlined className="text-[14px] text-neutral6" />
            <div className="text-xs font-medium text-neutral8">
              Thu Hồng{" "}
              <span className="font-normal text-neutral6">(012343454)</span>
            </div>
          </div>
        </div>
        {/* Order */}
        <div
          className="flex flex-col gap-[8px] rounded-[12px] bg-white p-[12px]"
          style={{ boxShadow: "0px 4px 12px 0px #D0DAE01F" }}
        >
          <div className="flex items-center justify-between">
            <div className="text-xs font-normal text-neutral6">Đơn #1232</div>
            <Tags status="completed" />
          </div>
          <div className="text-sm font-normal">
            1x Chai nước lavie, 1 thùng sữa ABC
          </div>
          <div className="flex items-center gap-[4px]">
            <UserOutlined className="text-[14px] text-neutral6" />
            <div className="text-xs font-medium text-neutral8">
              Thu Hồng{" "}
              <span className="font-normal text-neutral6">(012343454)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
