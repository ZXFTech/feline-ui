import { FC, HTMLAttributes } from "react";
import { NeuIntensity, NeuType } from "../../types";
import classNames from "classnames";

interface NeuDivProps extends HTMLAttributes<HTMLElement> {
  neuType?: NeuType;
  intensity?: NeuIntensity;
  disable?: boolean;
}

export const NeuDiv: FC<NeuDivProps> = (props) => {
  const {
    neuType = NeuType.Debossed,
    intensity = NeuIntensity.Normal,
    disable = false,
    className,
    ...restProps
  } = props;

  const classes = classNames("neu-div", className, `${neuType}-${intensity}`, {
    disable: disable,
  });

  return <div className={classes} {...restProps}></div>;
};
