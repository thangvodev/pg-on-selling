import React, { FC } from "react";

const Tags: FC<{ status: TStatus }> = ({ status }) => {
  return (
    <div className="flex items-center gap-[8px]">
      {status === "completed" && <TagCompleted />}
      {status === "paid" && <TagPaid />}
    </div>
  );
};

const TagPaid = () => {
  return (
    <div className="flex h-[26px] items-center justify-center rounded-[24px] bg-infor1 px-[6px]">
      <span className="text-xs font-normal text-infor3">Đã thanh toán</span>
    </div>
  );
};

const TagCompleted = () => {
  return (
    <div className="flex h-[26px] items-center justify-center rounded-[24px] bg-success1 px-[6px]">
      <span className="text-xs font-normal text-success4">Đã hoàn thành</span>
    </div>
  );
};

export { Tags };

type TStatus = "completed" | "paid";
