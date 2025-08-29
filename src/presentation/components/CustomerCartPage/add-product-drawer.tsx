import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import { Button } from "../common/button";
import { Divider, Input, InputNumber } from "antd";
import { Form } from "../common/form";
import { formatCurrency } from "../../utils/helpers";
import CloseIcon from "../icons/CloseIcon";
import { SearchBarNoPopup } from "../common/search-bar";
import SearchIcon from "../icons/SearchIcon";
import { Radio } from "../common/radio";
import ProductImage from "../../static/images/product.jpg";
import MinusCircleIcon from "../icons/MinusCircleIcon";
import AddCircleIcon from "../icons/AddCircleIcon";

const AddProductDrawer: FC<Props> = ({ children }) => {
  const [searchForm] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  function handleSubmit() {
    setVisible(false);
  }

  function handleSearch(values: any) {
    console.log(values);
    setIsSearching(true);
  }

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="absolute inset-x-[5px]">
                <Button.Icon
                  icon={<CloseIcon className="size-[32px] text-white" />}
                  className="absolute right-0 -translate-y-[70px]"
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
          height={"85vh"}
          style={{
            background: "#FFFFFF",
            borderRadius: "20px 20px 0 0",
            overflow: "visible",
          }}
        >
          <div className="-mt-[28px] px-[16px]">
            <Form
              form={searchForm}
              className="flex flex-col gap-[8px]"
              onFinish={handleSearch}
            >
              <Form.Item name="searchKey" noStyle>
                <SearchBarNoPopup
                  className="h-[44px] rounded-[24px] border-none bg-grayinput text-base"
                  placeholder="Tìm sản phẩm"
                  suffixIcon={
                    <Button.Icon
                      icon={<SearchIcon className="text-secondary4" />}
                      className="size-[26px] bg-white p-[6px]"
                      onClick={searchForm.submit}
                    />
                  }
                  onClear={() => setIsSearching(false)}
                />
              </Form.Item>
              <Form.Item name="category" noStyle hidden={isSearching}>
                <Radio.ButtonGroup
                  multiple
                  items={categories}
                  render={(category) => (
                    <div className="flex h-[27px] items-center justify-center rounded-[24px] bg-infor1 px-[8px] text-xs font-normal text-infor3">
                      {category?.name}
                    </div>
                  )}
                  activeRender={(category) => (
                    <div className="flex h-[27px] items-center justify-center rounded-[24px] bg-infor3 px-[8px] text-xs font-normal text-white">
                      {category?.name}
                    </div>
                  )}
                  className="flex gap-[12px]"
                  itemFlex={false}
                />
              </Form.Item>
            </Form>
          </div>
          <DrawerContent isSearching={isSearching} />
          <div
            className="fixed inset-x-0 bottom-0 flex justify-between bg-white px-[16px] pb-[24px] pt-[12px]"
            style={{ boxShadow: "0px -4px 24px 0px #A2A2A21F" }}
          >
            <div className="flex flex-col gap-[8px]">
              <div className="text-xs font-medium">Tổng tiền</div>
              <div className="text-[18px] font-semibold leading-none text-error3">
                {formatCurrency(240000)}
              </div>
            </div>
            <Button
              text={
                <div className="text-base font-medium text-white">
                  Thêm vào đơn
                </div>
              }
              className="flex flex-none items-center justify-center rounded-[40px] px-[48px]"
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

const DrawerContent: FC<{ isSearching?: boolean }> = ({ isSearching }) => {
  const [cartForm] = Form.useForm();

  const initialValues = {
    cartItems: cartItems,
  };

  useEffect(() => {
    if (isSearching) {
      cartForm.setFieldValue("cartItems", searchResult);
    } else {
      cartForm.setFieldValue("cartItems", cartItems);
    }
  }, [isSearching]);

  if (!isSearching) {
    return (
      <>
        <Divider className="mb-[20px] mt-[8px]" />
        <div className="flex flex-1 flex-col gap-[14px] overflow-auto px-[16px]">
          <div className="text-xl font-medium">Tất cả sản phẩm</div>
          <Form form={cartForm} initialValues={initialValues}>
            <Form.List name="cartItems">
              {(fields, { remove }) => (
                <div className="flex flex-col gap-[12px] pb-[120px]">
                  {/* Cart Item */}
                  {fields.map((field, index) => {
                    const itemIndex = field.name;
                    const item = cartForm.getFieldValue("cartItems")[itemIndex];

                    return (
                      <React.Fragment key={index}>
                        <div className="flex gap-[8px]">
                          <img
                            src={item.image}
                            alt=""
                            className="size-[56px] rounded-[8.4px] object-cover"
                          />
                          <div className="flex flex-1 flex-col justify-between">
                            {/* Title */}
                            <div className="text-base font-medium">
                              {item.title}
                            </div>
                            <div className="flex items-center justify-between">
                              {/* Price */}
                              <div className="text-sm font-medium text-neutral6">
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
                                    cartForm.getFieldValue("cartItems")[
                                      itemIndex
                                    ];
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
                                              [
                                                "cartItems",
                                                itemIndex,
                                                "quantity",
                                              ],
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
                                              [
                                                "cartItems",
                                                itemIndex,
                                                "quantity",
                                              ],
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
                                            [
                                              "cartItems",
                                              itemIndex,
                                              "quantity",
                                            ],
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
                        {index < fields.length - 1 ? (
                          <Divider className="m-0" />
                        ) : null}
                      </React.Fragment>
                    );
                  })}
                </div>
              )}
            </Form.List>
          </Form>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-[14px] px-[16px] pt-[14px]">
      <div>Tìm thấy 12 kết quả phù hợp với từ khóa Tủ lạnh</div>
      <Divider className="m-0" />
      {/* List */}
      <div className="flex flex-1 flex-col gap-[14px] overflow-auto">
        <Form form={cartForm} initialValues={initialValues}>
          <Form.List name="cartItems">
            {(fields) => (
              <div className="flex flex-col gap-[12px] pb-[120px]">
                {/* Cart Item */}
                {fields.map((field, index) => {
                  const itemIndex = field.name;
                  const item = cartForm.getFieldValue("cartItems")[itemIndex];

                  return (
                    <React.Fragment key={index}>
                      <div className="flex flex-1 flex-col justify-between">
                        {/* Title */}
                        <div className="text-base font-medium">
                          {item.title}
                        </div>
                        <div className="flex items-center justify-between">
                          {/* Price */}
                          <div className="text-sm font-medium text-neutral6">
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
                              if (item.quantity <= 0) {
                                return (
                                  <Button
                                    text={
                                      <div className="text-xs font-medium text-white">
                                        Thêm
                                      </div>
                                    }
                                    className="flex h-[28px] w-[72px] flex-none items-center justify-center rounded-[100px]"
                                    style={{
                                      background:
                                        "linear-gradient(180deg, #6AAEF2 0%, #4884FF 100%)",
                                    }}
                                    onClick={() => {
                                      const currQuantity = item.quantity;
                                      const nextQuantity = currQuantity + 1;
                                      cartForm.setFieldValue(
                                        ["cartItems", itemIndex, "quantity"],
                                        nextQuantity,
                                      );
                                    }}
                                  />
                                );
                              }
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

                                      cartForm.setFieldValue(
                                        ["cartItems", itemIndex, "quantity"],
                                        nextQuantity,
                                      );
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
                      {index < fields.length - 1 ? (
                        <Divider className="m-0" />
                      ) : null}
                    </React.Fragment>
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

export { AddProductDrawer };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const categories = [
  { name: "Đèn ngủ", value: "1" },
  { name: "Ghế sofa", value: "2" },
  { name: "Kệ sách", value: "3" },
];

const cartItems = [
  {
    id: "1",
    image: ProductImage,
    title: "Mặt nạ dưỡng ẩm Insifree",
    price: 120000,
    quantity: 2,
  },
  {
    id: "2",
    image: ProductImage,
    title: "Mặt nạ dưỡng ẩm Insifree",
    price: 120000,
    quantity: 1,
  },
  {
    id: "3",
    image: ProductImage,
    title: "Mặt nạ dưỡng ẩm Insifree",
    price: 120000,
    quantity: 2,
  },
];

const searchResult = [
  {
    id: "4",
    image: ProductImage,
    title: "Mặt nạ dưỡng ẩm Insifree",
    price: 120000,
    quantity: 0,
  },
  {
    id: "2",
    image: ProductImage,
    title: "Mặt nạ dưỡng ẩm Insifree",
    price: 120000,
    quantity: 1,
  },
  {
    id: "3",
    image: ProductImage,
    title: "Mặt nạ dưỡng ẩm Insifree",
    price: 120000,
    quantity: 2,
  },
];
