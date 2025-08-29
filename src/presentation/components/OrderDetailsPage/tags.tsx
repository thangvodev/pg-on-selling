import React, { FC } from "react";

const Tags: FC<{ status: TStatus }> = ({ status }) => {
  return (
    <div className="flex items-center gap-[8px]">
      {status === "confirmed" && <TagConfirmed />}
      {status === "completed" && <TagCompleted />}
    </div>
  );
};

const TagConfirmed = () => {
  return (
    <div className="flex h-[21px] items-center justify-center rounded-[24px] bg-infor1 px-[8px]">
      <span className="text-[11px] font-normal text-infor3">Đã thanh toán</span>
    </div>
  );
};

const TagCompleted = () => {
  return (
    <div className="flex h-[21px] items-center justify-center rounded-[24px] bg-success1 px-[8px]">
      <span className="text-[11px] font-normal text-success4">
        Đã hoàn thành
      </span>
    </div>
  );
};

export { Tags };

type TStatus = "confirmed" | "completed";
