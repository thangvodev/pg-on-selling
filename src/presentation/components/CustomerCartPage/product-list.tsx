import React, { useState } from "react";
import EmptyCart from "../../static/images/empty-cart.png";
import { Button } from "../common/button";
import { AddProductDrawer } from "./add-product-drawer";
import BoxIcon from "../icons/BoxIcon";
import ProductImage from "../../static/images/product.jpg";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Form } from "../common/form";
import { formatCurrency } from "../../utils/helpers";
import MinusCircleIcon from "../icons/MinusCircleIcon";
import { Divider, InputNumber } from "antd";
import AddCircleIcon from "../icons/AddCircleIcon";
import TrashBinIcon from "../icons/TrashBinIcon";

export const ProductList = () => {
  const [cartForm] = Form.useForm();
  const [productList, setproductList] = useState<TProduct[]>(cartItems);

  const initialValues = {
    cartItems: cartItems,
  };

  if (!productList) {
    return (
      <div
        className="flex flex-col items-center gap-[14px] rounded-[12px] bg-white px-[16px] py-[24px]"
        style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
      >
        <img src={EmptyCart} alt="" className="size-[99px]" />
        <div className="text-xs font-normal text-neutral6">
          Chưa thêm sản phẩm nào
        </div>
        <AddProductDrawer>
          {({ open }) => (
            <Button
              text={
                <div className="text-sm font-medium text-secondary4">
                  Thêm sản phẩm
                </div>
              }
              className="flex h-[33px] flex-none items-center justify-center rounded-[40px] bg-secondary1 px-[16px]"
              onClick={open}
            />
          )}
        </AddProductDrawer>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex items-center gap-[4px]">
        <BoxIcon className="size-[20px] text-neutral6" />
        <div className="text-sm font-normal">Thông tin đơn hàng</div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <AddProductDrawer>
          {({ open }) => (
            <Button
              text={
                <div className="flex items-center gap-[8px]">
                  <div className="text-xs font-medium text-infor3">
                    Thêm sản phẩm
                  </div>
                  <PlusCircleOutlined className="text-infor3" />
                </div>
              }
              className="border-infor2 flex h-[36px] flex-none items-center justify-center rounded-[8px] border border-dashed bg-white"
              style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
              onClick={open}
            />
          )}
        </AddProductDrawer>
        <Form form={cartForm} initialValues={initialValues}>
          <Form.List name="cartItems">
            {(fields, { remove }) => (
              <div className="flex flex-col gap-[12px] pb-[120px]">
                {/* Cart Item */}
                {fields.map((field, index) => {
                  const itemIndex = field.name;
                  const item = cartForm.getFieldValue("cartItems")[itemIndex];

                  return (
                    <div
                      className="flex gap-[8px] rounded-[12px] bg-white px-[16px] py-[12px]"
                      style={{ boxShadow: "0px 4px 24px 0px #8AA9B114" }}
                      key={index}
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="size-[56px] rounded-[8.4px] object-cover"
                      />
                      <div className="flex flex-1 flex-col justify-between">
                        {/* Title */}
                        <div className="flex justify-between gap-[8px]">
                          <div className="text-sm font-normal">
                            {item.title}
                          </div>
                          <TrashBinIcon className="size-[18px] text-error3" />
                        </div>
                        <div className="flex items-center justify-between">
                          {/* Price */}
                          <div className="text-xs font-medium text-neutral6">
                            {formatCurrency(item.price)}
                          </div>
                          {/* Quantity */}
                          <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, curValues) =>
                              prevValues.cartItems !== curValues.cartItems
                            }
                          >
                            {() => {
                              const item =
                                cartForm.getFieldValue("cartItems")[itemIndex];
                              return (
                                <div className="flex items-center gap-[8px]">
                                  <Button.Icon
                                    icon={
                                      <MinusCircleIcon className="size-[24px] text-neutral4" />
                                    }
                                    onClick={() => {
                                      const currQuantity = item.quantity;
                                      const nextQuantity = Math.max(
                                        currQuantity - 1,
                                        0,
                                      );
                                      if (nextQuantity === 0) {
                                        remove(itemIndex);
                                      } else {
                                        cartForm.setFieldValue(
                                          ["cartItems", itemIndex, "quantity"],
                                          nextQuantity,
                                        );
                                      }
                                    }}
                                  />
                                  <InputNumber
                                    value={item.quantity}
                                    min={0}
                                    onChange={(value) => {
                                      if (value !== null && !isNaN(value)) {
                                        cartForm.setFieldValue(
                                          ["cartItems", itemIndex, "quantity"],
                                          value,
                                        );
                                      }
                                    }}
                                    controls={false}
                                    className="custom-input-number rounded-[4px] font-medium"
                                    style={{
                                      width: `${String(item.quantity).length * 12}px`,
                                      minWidth: "21px",
                                      maxWidth: "150px",
                                    }}
                                  />
                                  <Button.Icon
                                    icon={
                                      <AddCircleIcon className="size-[24px] text-[#4884FF]" />
                                    }
                                    onClick={() => {
                                      const currQuantity = item.quantity;
                                      const nextQuantity = currQuantity + 1;
                                      cartForm.setFieldValue(
                                        ["cartItems", itemIndex, "quantity"],
                                        nextQuantity,
                                      );
                                    }}
                                  />
                                </div>
                              );
                            }}
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </Form.List>
        </Form>
      </div>
    </div>
  );
};

type TProduct = {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

const cartItems = [
  {
    id: "1",
    image: ProductImage,
    title: "Ghế Sofa chất liệu cotton màu xanh navy",
    price: 120000,
    quantity: 2,
  },
  {
    id: "2",
    image: ProductImage,
    title: "Ghế Sofa chất liệu cotton màu xanh navy",
    price: 120000,
    quantity: 1,
  },
];
