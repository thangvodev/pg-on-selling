import React, { FC, useState } from "react";
import { Modal } from "zmp-ui";
import { Button } from "../common/button";
import CloseIcon from "../icons/CloseIcon";
import Pinwheel from "../../static/images/pinwheel.png";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

export const SpinPopup: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
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
              <>
                <div
                  className="absolute right-0 top-0 size-[32px] -translate-y-[50px]"
                  onClick={handleCancel}
                >
                  <CloseIcon className="size-[100%] text-white" />
                </div>
              </>
            ) as unknown as string
          }
          onClose={() => {
            setIsModalOpen(false);
          }}
          modalStyle={{
            overflow: "visible",
            paddingTop: "28px",
            position: "relative",
            width: "294px",
            borderRadius: "40px",
            background: "#EDFBFF",
            border: "3px solid white",
            boxShadow: " 0px 0px 40px 0px #FFFFFF40 inset",
          }}
        >
          <div className="flex flex-col items-center gap-[12px] px-[27px] pb-[30px]">
            {/* Head */}
            <div className="flex flex-col items-center gap-[5px]">
              <div
                className="!bg-clip-text text-[22px] font-bold uppercase leading-[120%] text-transparent"
                style={{
                  background:
                    "linear-gradient(180deg, #7CC6FF 0%, #1197E5 100%)",
                }}
              >
                Chúc mừng
              </div>
              <div className="text-center text-sm font-medium text-neutral6">
                Được tặng{" "}
                <span className="text-base font-bold text-[#4884FF]">2</span>{" "}
                lượt quay vòng quay may mắn
              </div>
            </div>
            {/* Content */}
            <PopupContent />
            {/* Submit button */}
            <Button
              text={
                <span className="text-sm font-medium text-white">
                  Quay ngay
                </span>
              }
              className="flex h-[42px] w-[171px] flex-none items-center justify-center rounded-[40px]"
              style={{
                boxShadow:
                  "0px 8px 20px 0px #0088BA40, 0px 0px 2px 0px #FFFFFF40 inset",
                background: "linear-gradient(180deg, #4884FF 0%, #6AAEF2 100%)",
                border: "1.5px solid white",
              }}
              onClick={() => {
                navigate("/order-details");
              }}
            />
          </div>
        </Modal>,
        document.body,
      )}
    </>
  );
};

const PopupContent = () => {
  return (
    <div className="h-[160px] w-[160px] rounded-[12px]">
      <img src={Pinwheel} alt="" className="size-full object-cover" />
    </div>
  );
};

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
