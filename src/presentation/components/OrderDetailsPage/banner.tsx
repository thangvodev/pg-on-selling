import React, { FC } from "react";
import LavieImage from "../../static/images/lavie.png";

const Banner = () => {
  return (
    <img src={LavieImage} alt="" className="h-[168px] w-full object-cover" />
  );
};

export { Banner };
