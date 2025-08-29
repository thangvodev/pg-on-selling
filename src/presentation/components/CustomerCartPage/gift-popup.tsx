import React, { FC, useState } from "react";
import { Modal } from "zmp-ui";
import { Button } from "../common/button";
import CloseIcon from "../icons/CloseIcon";
import Pillow from "../../static/images/pillow.png";
import GiftImg from "../../static/icons/gift.svg";
import { Radio as OriginalRadio } from "antd";
import { Radio } from "../common/radio";
import { Form } from "../common/form";
import { useForm } from "antd/es/form/Form";
import { Checkbox } from "../common/checkbox";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

export const GiftPopup: FC<Props> = ({ children }) => {
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
          <>
            <img
              src={GiftImg}
              alt=""
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[100px]"
            />
            <div className="flex flex-col items-center gap-[20px] pb-[30px] pt-[30px]">
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
                <div className="text-xs font-medium text-[#4884FF]">
                  Mua 2 sản phẩm tặng 1
                </div>
              </div>
              {/* Content */}
              <PopupContent type="single" />
              {/* Submit button */}
              <Button
                text={
                  <span className="text-sm font-medium text-white">
                    Nhận quà
                  </span>
                }
                className="flex h-[42px] w-[171px] flex-none items-center justify-center rounded-[40px]"
                style={{
                  boxShadow:
                    "0px 8px 20px 0px #0088BA40, 0px 0px 2px 0px #FFFFFF40 inset",
                  background:
                    "linear-gradient(180deg, #4884FF 0%, #6AAEF2 100%)",
                  border: "1.5px solid white",
                }}
                onClick={() => navigate("/order")}
              />
            </div>
          </>
        </Modal>,
        document.body,
      )}
    </>
  );
};

const PopupContent: FC<{ type: "single" | "radio" | "checkbox" }> = ({
  type,
}) => {
  const [form] = useForm();
  const [checked, setChecked] = useState<any[]>([]);

  if (type === "single") {
    return (
      <>
        <div className="-mt-[7px] text-sm font-semibold text-neutral8">
          1x Gối kê cổ cam đáng yêu
        </div>
        <div className="h-[110px] w-[160px] rounded-[12px] p-[12px]">
          <img src={Pillow} alt="" className="size-full object-cover" />
        </div>
      </>
    );
  }

  if (type === "radio") {
    return (
      <div className="flex flex-col items-center gap-[20px]">
        <div className="-mt-[10px] text-xs font-medium text-neutral8">
          Vui lòng chọn{" "}
          <span className="text-sm font-bold text-[#4884FF]">1</span> món quà.
        </div>
        <Form form={form}>
          <Form.Item name="products" noStyle>
            <Radio.ButtonGroup
              items={radioData}
              render={(item) => (
                <div
                  className="flex h-[60.54px] w-full items-center gap-[8px] rounded-[12px] bg-white p-[12px]"
                  style={{ boxShadow: "0px 4px 18px 0px #5655552B" }}
                >
                  <OriginalRadio className="custom-radio m-0" />
                  <img
                    src={item?.image}
                    alt=""
                    className="w-[53.14px] object-cover"
                  />
                  <div className="text-xs font-medium text-neutral8">
                    {item?.name}
                  </div>
                </div>
              )}
              activeRender={(item) => (
                <div
                  className="flex h-[60.54px] w-full items-center gap-[8px] rounded-[12px] bg-white p-[12px]"
                  style={{ boxShadow: "0px 4px 18px 0px #5655552B" }}
                >
                  <OriginalRadio className="custom-radio m-0" checked />
                  <img
                    src={item?.image}
                    alt=""
                    className="w-[53.14px] object-cover"
                  />
                  <div className="text-xs font-medium text-neutral8">
                    {item?.name}
                  </div>
                </div>
              )}
              className="flex gap-[12px]"
              direction="column"
            />
          </Form.Item>
        </Form>
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <div className="flex flex-col items-center gap-[20px]">
        <div className="-mt-[10px] text-xs font-medium text-neutral8">
          Vui lòng chọn ít nhất{" "}
          <span className="text-sm font-bold text-[#4884FF]">2</span> món quà.
        </div>
        {checkboxData.map((item, index) => (
          <div
            key={index}
            className="flex h-[60.54px] w-full items-center gap-[8px] rounded-[12px] bg-white p-[12px]"
            style={{ boxShadow: "0px 4px 18px 0px #5655552B" }}
            onClick={() => {
              if (checked.includes(item?.value)) {
                setChecked(checked.filter((i) => i !== item?.value));
              } else {
                setChecked([...checked, item?.value]);
              }
            }}
          >
            <Checkbox
              className="custom-radio m-0"
              checked={checked.includes(item?.value)}
            />
            <img
              src={item?.image}
              alt=""
              className="w-[53.14px] object-cover"
            />
            <div className="text-xs font-medium text-neutral8">
              {item?.name}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <div></div>;
};

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const radioData = [
  { image: Pillow, name: "1x Gối kê cổ cam đáng yêu", value: 1 },
  { image: Pillow, name: "1x Gối kê cổ cam đáng yêu", value: 2 },
];

const checkboxData = [
  { image: Pillow, name: "1x Gối kê cổ cam đáng yêu", value: 1 },
  { image: Pillow, name: "1x Gối kê cổ cam đáng yêu", value: 2 },
  { image: Pillow, name: "1x Gối kê cổ cam đáng yêu", value: 3 },
];
