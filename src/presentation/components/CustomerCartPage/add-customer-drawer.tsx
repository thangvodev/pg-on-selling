import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Button } from "../common/button";
import { Divider, Input } from "antd";
import CloseFilledIcon from "../icons/CloseFilledIcon";
import { Form } from "../common/form";

const AddCustomerDrawer: FC<Props> = ({ children }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  function handleSubmit() {
    setVisible(false);
  }

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="absolute inset-x-[14px] flex items-center justify-center">
                <div className="text-base font-medium">Thêm khách hàng mới</div>
                <Button.Icon
                  icon={
                    <CloseFilledIcon className="size-[20px] text-neutral4" />
                  }
                  className="absolute right-0 ml-auto"
                  onClick={() => setVisible(false)}
                />
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          mask
          handler={false}
          unmountOnClose
          height={"90vh"}
          style={{
            background: "#FFFFFF",
            borderRadius: "20px 20px 0 0",
          }}
        >
          <div className="px-[14px]">
            <Divider className="my-[12px]" />
          </div>
          <Form form={form}>
            <div className="flex flex-1 flex-col gap-[14px] px-[14px]">
              <div className="text-sm font-normal text-neutral6">
                Nhập đầy đủ thông tin khách hàng để bán hàng
              </div>
              <Form.Item
                label="Số điện thoại"
                labelCol={{ className: "!p-0" }}
                style={{ margin: 0 }}
                required
              >
                <Input
                  placeholder="023489385"
                  className="!bg-grayinput h-[46px] rounded-[8px] border-none text-xs font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Tên khách hàng"
                labelCol={{ className: "!p-0" }}
                style={{ margin: 0 }}
                required
              >
                <Input
                  placeholder="Thu Hồng"
                  className="!bg-grayinput h-[46px] rounded-[8px] border-none text-xs font-normal"
                />
              </Form.Item>
              <Form.Item
                label="Ghi chú"
                labelCol={{ className: "!p-0" }}
                style={{ margin: 0 }}
              >
                <Input.TextArea
                  placeholder="Nhập ghi chú"
                  className="!bg-grayinput rounded-[8px] border-none text-xs font-normal"
                  autoSize={{ minRows: 5, maxRows: 10 }}
                />
              </Form.Item>
            </div>
          </Form>
          <div
            className="fixed inset-x-0 bottom-0 bg-white px-[16px] pb-[20px] pt-[10px]"
            style={{ boxShadow: "0px -4px 12px 0px #406A5D1F" }}
          >
            <Button
              text={
                <div className="text-base font-medium text-white">Xác nhận</div>
              }
              className="h-[43px] w-full flex-none rounded-[40px]"
              style={{
                background: "linear-gradient(180deg, #6AAEF2 0%, #4884FF 100%)",
              }}
              onClick={handleSubmit}
            />
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { AddCustomerDrawer };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
