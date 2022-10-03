import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder100: "rounded-radius100",
  CircleBorder40: "rounded-radius40",
};
const variants = {
  FillIndigo800: "bg-indigo_800 text-white_A700",
  OutlineAmber300: "border-amber_300 border-bw05 border-solid text-amber_300",
  OutlineAmber3001_2: "border border-amber_300 border-solid text-white_A700",
  FillWhiteA700: "bg-white_A700 text-indigo_800",
  FillGray101: "bg-gray_101 text-black_900",
  OutlineOrange300: "border border-orange_300 border-solid text-orange_300",
};
const sizes = {
  sm: "p-[3px]",
  md: "lg:p-[4px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  lg: "lg:p-[11px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  xl: "lg:p-[16px] xl:p-[20px] p-[23px] 3xl:p-[27px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["CircleBorder100", "CircleBorder40"]),
  variant: PropTypes.oneOf([
    "FillIndigo800",
    "OutlineAmber300",
    "OutlineAmber3001_2",
    "FillWhiteA700",
    "FillGray101",
    "OutlineOrange300",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
