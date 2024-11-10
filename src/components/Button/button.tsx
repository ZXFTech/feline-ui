import React from "react";
import classNames from "classnames";

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const {
    className,
    disabled = false,
    size,
    btnType = ButtonType.Default,
    children,
    href,
  } = props;

  // btn, btn-lg, btn-primary
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: ButtonType.Default,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });

  console.log(classes);

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};

export default Button;
