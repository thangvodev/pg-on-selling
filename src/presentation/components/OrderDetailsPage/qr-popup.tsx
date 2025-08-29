import React, { FC, useState } from "react";
import { Modal } from "zmp-ui";
import { Button } from "../common/button";
import CloseIcon from "../icons/CloseIcon";
import QRImage from "../../static/images/qrcode.png";
import { createPortal } from "react-dom";

export const QRPopup: FC<Props> = ({ children, extraFn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {children({ open: () => setIsModalOpen(true) })}
      {createPortal(
        <Modal
          visible={isModalOpen}
          title={
            (
              <div
                className="absolute right-0 top-0 size-[32px] -translate-y-[50px]"
                onClick={handleCancel}
              >
                <CloseIcon className="size-[100%] text-white" />
              </div>
            ) as unknown as string
          }
          onClose={() => {
            setIsModalOpen(false);
          }}
          modalStyle={{
            overflow: "visible",
            padding: "20px 20px 24px 20px",
            position: "relative",
            width: "343px",
            borderRadius: "24px",
          }}
        >
          <div className="-mt-[12px] flex h-full flex-col items-center gap-[20px]">
            <div className="text-xl font-medium">Mã QR</div>
            <div
              className="w-full rounded-[16.82px] border-[1.4px] border-[#E8E8E8] p-[16.82px]"
              style={{ boxShadow: "0px 7.5px 22.5px 0px #B1B3B540" }}
            >
              <img src={QRImage} alt="" className="size-full" />
            </div>
            <Button
              text={
                <span className="text-sm font-medium text-white">Tải QR</span>
              }
              className="flex h-[41px] w-full flex-none items-center justify-center rounded-[40px] bg-secondary4"
              onClick={() => {
                setIsModalOpen(false);
                extraFn?.();
              }}
            />
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
  extraFn?: () => void;
};
