import React, { ReactElement, InputHTMLAttributes, FC } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
type InputSize = "lg" | "sm";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  disable?: boolean;
  size?: InputSize;
  icon?: IconProp;
  suffix?: string | ReactElement;
}

export const Input: FC<InputProps> = (props) => {
  // 取出各种属性
  // 根据属性计算 class name

  return (
    // 根据属性判断是否要添加特定的节点
    <></>
  );
};
