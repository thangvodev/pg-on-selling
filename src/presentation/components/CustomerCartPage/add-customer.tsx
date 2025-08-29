import React, { useState } from "react";
import UserPlus from "../../static/icons/user-plus.svg";
import UserIcon from "../../static/icons/user.svg";
import QRScanIcon from "../icons/QRScanIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import { AddCustomerDrawer } from "./add-customer-drawer";

export const AddCustomer = () => {
  const [customer, setCustomer] = useState<TCustomer>();

  if (!customer) {
    return (
      <AddCustomerDrawer>
        {({ open }) => (
          <div
            className="flex items-center justify-between rounded-[12px] bg-white px-[16px] py-[12px]"
            style={{ boxShadow: " 0px 4px 24px 0px #8AA9B114" }}
            onClick={open}
          >
            <div className="flex items-center gap-[12px]">
              <div className="flex size-[32px] items-center justify-center rounded-full bg-infor1">
                <img src={UserPlus} />
              </div>
              <div className="text-xs font-medium text-infor3">
                Thêm khách hàng
              </div>
            </div>
            <div className="flex size-[24px] items-center justify-center rounded-[6px] border border-secondary2 bg-secondary1">
              <QRScanIcon className="size-[18px] text-secondary4" />
            </div>
          </div>
        )}
      </AddCustomerDrawer>
    );
  }

  return (
    <div
      className="flex items-center justify-between rounded-[12px] bg-white px-[16px] py-[12px]"
      style={{ boxShadow: " 0px 4px 24px 0px #8AA9B114" }}
    >
      <div className="flex items-center gap-[12px]">
        <div className="flex size-[32px] items-center justify-center rounded-full bg-infor1">
          <img src={customer.pfp ? customer.pfp : UserIcon} />
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="text-xs font-medium leading-none">
            Thông tin khách hàng
          </div>
          <div className="text-xs font-medium leading-none text-gray7">
            {customer.name}{" "}
            <span className="text-[11px] font-normal text-gray6">
              ({customer.phone})
            </span>
          </div>
        </div>
      </div>
      <div className="flex size-[20px] items-center justify-center">
        <ChevronRightIcon className="text-neutral6" />
      </div>
    </div>
  );
};

type TCustomer = {
  name: string;
  phone: string;
  pfp: string;
};

const customerData = {
  name: "Thu Hồng",
  phone: "039439856",
  pfp: "",
};
