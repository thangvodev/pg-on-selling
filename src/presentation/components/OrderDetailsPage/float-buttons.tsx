import React from "react";
import { Button } from "../common/button";

export const FloatButtons = () => {
  return (
    <div
      className="fixed inset-x-0 bottom-0 flex flex-col gap-[12px] bg-white px-[16px] pb-[20px] pt-[10px]"
      style={{ boxShadow: "0px -4px 12px 0px #406A5D1F" }}
    >
      <Button
        text={
          <span className="text-base font-medium text-white">Hoàn thành</span>
        }
        className="flex h-[43px] flex-none items-center justify-center rounded-[40px]"
        style={{
          background: "linear-gradient(180deg, #6AAEF2 0%, #4884FF 100%)",
        }}
      />
      <Button
        text={
          <span className="text-base font-medium text-secondary4">
            Tiếp tục tạo mới
          </span>
        }
        className="flex h-[43px] flex-none items-center justify-center rounded-[40px] bg-secondary1"
      />
    </div>
  );
};
