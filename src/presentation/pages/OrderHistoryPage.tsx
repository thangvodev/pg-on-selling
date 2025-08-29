import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../components/icons/ArrowLeftIcon";
import { OrderHistoryPageContent } from "../components/OrderHistoryPage";

const OrderHistoryPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-white">
      <Header
        title={
          (
            <div className="flex w-[calc(100%-80px)] justify-center">
              <div className="">Lịch sử đơn hàng</div>
            </div>
          ) as unknown as string
        }
        className="topbar no-border h-auto flex-none"
        backIcon={
          <div className="absolute left-1/2 top-1/2 flex size-[16px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
            <ArrowLeftIcon className="size-full object-cover" />
          </div>
        }
      />
      <div className="flex-1 overflow-auto bg-surface">
        <OrderHistoryPageContent />
      </div>
    </Page>
  );
};

export default OrderHistoryPage;
