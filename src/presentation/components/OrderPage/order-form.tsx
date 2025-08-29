import React, { useState } from "react";
import UserIcon from "../../static/icons/user.svg";
import BoxIcon from "../icons/BoxIcon";
import ProductImg from "../../static/images/product1.jpg";
import { formatCurrency } from "../../utils/helpers";
import GiftIcon from "../icons/GiftIcon";
import PillowImg from "../../static/images/pillow.png";
import { Divider, Input } from "antd";
import CameraIcon from "../icons/CameraIcon";
import { ImageUpload, UploadImage } from "../common/image-upload";
import ImagesIcon from "../icons/ImagesIcon";
import NoteIcon from "../icons/NoteIcon";

export const OrderForm = () => {
  const [images, setImages] = useState<UploadImage[]>([]);
  const [images2, setImages2] = useState<UploadImage[]>([]);

  return (
    <div className="flex flex-col gap-[12px] px-[16px] pt-[12px]">
      {/* Customer brief */}
      <div
        className="flex items-center gap-[12px] rounded-[12px] bg-white px-[16px] py-[12px]"
        style={{ boxShadow: " 0px 4px 24px 0px #8AA9B114" }}
      >
        <div className="flex size-[32px] items-center justify-center rounded-full bg-infor1">
          <img src={UserIcon} />
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="text-xs font-medium leading-none">
            Thông tin khách hàng
          </div>
          <div className="text-xs font-medium leading-none text-gray7">
            Thu Hồng{" "}
            <span className="text-[11px] font-normal text-gray6">
              (039439856)
            </span>
          </div>
        </div>
      </div>
      {/* Order information */}
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[4px]">
          <BoxIcon className="size-[20px] text-neutral6" />
          <div className="text-sm font-normal">Thông tin đơn hàng</div>
        </div>
        <div className="flex flex-col gap-[12px]">
          {/* Product */}
          <div className="flex gap-[12px] rounded-[12px] bg-white px-[16px] py-[12px]">
            <img
              src={ProductImg}
              alt=""
              className="size-[53px] rounded-[8px]"
            />
            <div className="flex w-full flex-col gap-[4px]">
              <div className="text-sm font-normal">
                Ghế Sofa chất liệu cotton màu xanh navy
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-neutral6">
                  {formatCurrency(120000)}
                </div>
                <div className="text-sm font-medium text-neutral5">sl: 2</div>
              </div>
            </div>
          </div>
          {/* Product */}
          <div className="flex gap-[12px] rounded-[12px] bg-white px-[16px] py-[12px]">
            <img
              src={ProductImg}
              alt=""
              className="size-[53px] rounded-[8px]"
            />
            <div className="flex w-full flex-col gap-[4px]">
              <div className="text-sm font-normal">
                Ghế Sofa chất liệu cotton màu xanh navy
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-neutral6">
                  {formatCurrency(120000)}
                </div>
                <div className="text-sm font-medium text-neutral5">sl: 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gift section */}
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[4px]">
          <GiftIcon className="size-[20px] text-neutral6" />
          <div className="text-sm font-normal">Quà tặng</div>
        </div>
        <div className="flex flex-col gap-[14px] rounded-[12px] bg-white px-[16px] py-[12px]">
          <div className="text-sm font-medium">Mua 2 sản phẩm tặng 1</div>
          <div className="flex flex-col gap-[14px]">
            {/* Gift */}
            <div className="flex items-center gap-[8px]">
              <img
                src={PillowImg}
                alt=""
                className="w-[53.14px] object-cover"
              />
              <div className="text-xs font-medium text-neutral8">
                1x Gối kê cổ cam đáng yêu
              </div>
            </div>
            <Divider className="m-0 border-dashed" />
            {/* Gift */}
            <div className="flex items-center gap-[8px]">
              <img
                src={PillowImg}
                alt=""
                className="h-[36.54px] w-[53.14px] object-cover"
              />
              <div className="text-xs font-medium text-neutral8">
                1x Gối kê cổ cam đáng yêu
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Upload image */}
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[4px]">
          <CameraIcon className="size-[20px] text-neutral6" />
          <div className="text-sm font-normal">Chụp ảnh</div>
        </div>
        <div
          className="flex flex-col gap-[20px] rounded-[12px] bg-white px-[16px] py-[12px]"
          style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
        >
          {/* Activity 1 */}
          <div className="relative flex gap-[20px] rounded-[8px] border border-dashed border-secondary3 bg-[#F1F8FFB2] p-[12px]">
            <ImageUpload
              images={images}
              setImages={setImages}
              maxCount={1}
              listType="picture-card"
              className={"customSizedUpload absolute inset-0"}
              uploadButton={
                <div className="flex items-center p-[12px]">
                  <ImagesIcon className="size-[40px] text-[#E5EEF7]" />
                </div>
              }
            />
            <div className="flex flex-col gap-[6px] pl-[60px]">
              <div className="text-xs font-medium">Ảnh hoạt động 1</div>
              <div className="text-xs font-normal text-neutral300">
                Bắt buộc tải lên <span className="text-[#E64F00]">1 ảnh</span>
              </div>
            </div>
          </div>
          {/* Activity 2 */}
          <div className="relative flex gap-[20px] rounded-[8px] border border-dashed border-secondary3 bg-[#F1F8FFB2] p-[12px]">
            <ImageUpload
              images={images2}
              setImages={setImages2}
              maxCount={1}
              listType="picture-card"
              className={"customSizedUpload absolute inset-0"}
              uploadButton={
                <div className="flex items-center p-[12px]">
                  <ImagesIcon className="size-[40px] text-[#E5EEF7]" />
                </div>
              }
            />
            <div className="flex flex-col gap-[6px] pl-[60px]">
              <div className="text-xs font-medium">Ảnh hoạt động 2</div>
              <div className="text-xs font-normal text-neutral300">
                Bắt buộc tải lên <span className="text-[#E64F00]">1 ảnh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Notes */}
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[4px]">
          <NoteIcon className="size-[20px] text-neutral6" />
          <div className="text-sm font-normal">Ghi chú</div>
        </div>
        <Input.TextArea
          placeholder="Nhập ghi chú"
          className="rounded-[8px] text-xs"
          autoSize={{ minRows: 5, maxRows: 10 }}
        />
      </div>
    </div>
  );
};
