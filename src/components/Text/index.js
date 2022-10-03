import React from "react";
const variantClasses = {
  h1: "font-semibold lg:text-[51px] xl:text-[64px] text-[72px] 3xl:text-[86px]",
  h2: "font-semibold lg:text-[39px] xl:text-[49px] text-[56px] 3xl:text-[67px]",
  h3: "font-semibold lg:text-[34px] xl:text-[42px] text-[48px] 3xl:text-[57px]",
  h4: "font-semibold lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h5: "lg:text-[15px] xl:text-[19px] text-[22.18px] 2xl:text-[22px] 3xl:text-[26px]",
  h6: "font-medium lg:text-[15px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  body1: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  body2: "lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body3: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body4: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
