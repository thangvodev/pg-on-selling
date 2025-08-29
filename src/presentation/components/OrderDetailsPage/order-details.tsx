import React, { useState } from "react";
import { Divider, Input } from "antd";
import BoxIcon from "../icons/BoxIcon";
import ProductImg from "../../static/images/product1.jpg";
import PillowImg from "../../static/images/pillow.png";
import { formatCurrency } from "../../utils/helpers";
import GiftIcon from "../icons/GiftIcon";
import QRImage from "../../static/images/qrcode.png";
import { Tags } from "./tags";
import UserIcon from "../../static/icons/user.svg";
import GiftFilledIcon from "../icons/GiftFilledIcon";
import { ImageUpload, UploadImage } from "../common/image-upload";
import ImagesIcon from "../icons/ImagesIcon";
import CameraIcon from "../icons/CameraIcon";
import NoteIcon from "../icons/NoteIcon";
import ActivityImage from "../../static/images/activity.jpg";
import MagnifyPlusIcon from "../icons/MagnifyPlusIcon";
import { QRPopup } from "./qr-popup";

export const OrderDetails = () => {
  const [images, setImages] = useState<UploadImage[]>([]);
  const [images2, setImages2] = useState<UploadImage[]>([
    { name: "activity", url: ActivityImage },
  ]);

  return (
    <div className="flex -translate-y-[22px] flex-col gap-[6px] rounded-t-[20px] bg-[#F1FAFD]">
      {/* QRSection */}
      <div className="relative bg-white">
        <div
          className="absolute left-1/2 top-0 -mt-[80px] size-[160px] -translate-x-1/2 rounded-[8.97px] border-[0.75px] border-[#E8E8E8] bg-white p-[8.97px]"
          style={{ boxShadow: "0px 4px 12px 0px #B1B3B540" }}
        >
          <img src={QRImage} alt="" className="" />
          <QRPopup>
            {({ open }) => (
              <div
                className="absolute bottom-0 right-0 flex size-[24px] translate-x-1/4 translate-y-1/4 items-center justify-center rounded-[60px] bg-white"
                style={{ boxShadow: "0px 3px 9px 0px #6E6E6E1F" }}
                onClick={open}
              >
                <MagnifyPlusIcon className="size-[18px] text-secondary4" />
              </div>
            )}
          </QRPopup>
        </div>
        <div className="flex flex-col gap-[12px] px-[16px] pb-[10px] pt-[90px]">
          <div className="text-center text-xl font-medium">
            Món quà vô giá từ thiên nhiên
          </div>
          <div className="flex justify-center">
            <Tags status="confirmed" />
          </div>
        </div>
      </div>
      {/* Top section */}
      <div className="flex flex-col gap-[8px] bg-white p-[14px]">
        <div className="flex gap-[12px]">
          <img src={UserIcon} className="size-[32px] object-cover" />
          <div className="flex flex-col gap-[4px]">
            <div className="text-xs font-medium">Thông tin khách hàng</div>
            <div className="text-xs font-medium text-gray7">
              Thu Hồng{" "}
              <span className="text-[11px] font-normal text-gray6">
                (039439856)
              </span>
            </div>
          </div>
        </div>
        <Divider className="m-0" />
        {/* Order information */}
        <div className="flex flex-col gap-[14px]">
          <div className="flex items-center gap-[4px]">
            <BoxIcon className="size-[20px] text-neutral6" />
            <div className="text-sm font-normal">Thông tin đơn hàng</div>
          </div>
          <div className="flex flex-col gap-[12px]">
            {/* Product */}
            <div className="flex gap-[12px]">
              <img
                src={ProductImg}
                alt=""
                className="size-[53px] rounded-[8px]"
              />
              <div className="flex w-full flex-col gap-[8px]">
                <div className="text-sm font-normal">
                  Ghế Sofa chất liệu cotton màu xanh navy
                </div>
                <div className="text-xs font-medium">
                  {formatCurrency(120000)}
                </div>
              </div>
              <div className="text-sm font-medium text-neutral6">x2</div>
            </div>
            <Divider className="m-0" />
            {/* Product */}
            <div className="flex gap-[12px]">
              <img
                src={ProductImg}
                alt=""
                className="size-[53px] rounded-[8px]"
              />
              <div className="flex w-full flex-col gap-[8px]">
                <div className="text-sm font-normal">
                  Ghế Sofa chất liệu cotton màu xanh navy
                </div>
                <div className="text-xs font-medium">
                  {formatCurrency(120000)}
                </div>
              </div>
              <div className="text-sm font-medium text-neutral6">x2</div>
            </div>
          </div>
        </div>
      </div>
      {/* Gift section */}
      <div
        className="flex flex-col gap-[14px] bg-white p-[14px]"
        style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
      >
        <div className="flex items-center gap-[4px]">
          <GiftIcon className="size-[20px] text-neutral6" />
          <div className="text-sm font-normal">Quà tặng</div>
        </div>
        <div className="text-sm font-medium">Mua 2 sản phẩm tặng 1</div>
        <div className="flex flex-col gap-[14px]">
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
          <Divider className="m-0 border-dashed" />
          {/* Gift */}
          <div className="flex items-center gap-[8px]">
            <img
              src={PillowImg}
              alt=""
              className="h-[36.54px] w-[53.14px] object-cover"
            />
            <div className="flex flex-col gap-[8px]">
              <div className="bg-accent1 flex w-fit items-center gap-[5px] rounded-[8px] px-[4px] py-[3px]">
                <GiftFilledIcon className="size-[10px] text-accent6" />
                <div className="text-accent9 text-2xs font-normal">
                  Quà vòng quay may mắn
                </div>
              </div>
              <div className="text-xs font-medium text-neutral8">
                1x Gối kê cổ cam đáng yêu
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Upload image */}
      <div className="flex flex-col gap-[12px] bg-white p-[14px]">
        <div className="flex items-center gap-[4px]">
          <CameraIcon className="size-[20px] text-neutral6" />
          <div className="text-sm font-normal">Chụp ảnh</div>
        </div>
        <div
          className="flex flex-col gap-[20px] rounded-[12px] bg-white"
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
              disabled
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
              disabled
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
      <div className="flex flex-col gap-[12px] bg-white p-[14px]">
        <div className="flex items-center gap-[4px]">
          <NoteIcon className="size-[20px] text-neutral6" />
          <div className="text-sm font-normal">Ghi chú</div>
        </div>
        <Input.TextArea
          placeholder="Nhập ghi chú"
          className="rounded-[8px] text-xs"
          autoSize={{ minRows: 5, maxRows: 10 }}
          readOnly
        />
      </div>
    </div>
  );
};
