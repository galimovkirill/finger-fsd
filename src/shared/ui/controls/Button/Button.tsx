import { ButtonProps } from "./types";
import { FC } from "react";
import classNames from "classnames";
import "./styles/button.scss";
import { CircleLoader } from "@/shared/ui";

/**
 * TODO:
 * - make loader size based on button size prop
 */

const Button: FC<ButtonProps> = ({
  icon,
  iconPosition = "end",
  size = "medium",
  type = "default",
  nativeType = "button",
  color = "primary",
  disabled,
  block,
  active,
  uppercase,
  loading,
  children,
  onClick,
}) => {
  const classes = classNames(
    "btn",
    `btn--${color}`,
    `btn--${size}`,
    `btn--${type}`,
    block && "btn--block",
    active && "btn--active",
    disabled && "btn--disabled",
    uppercase && "btn--uppercase",
    !children && "btn--icon-only",
    loading && "btn--loading"
  );

  const hasEndIcon = icon && iconPosition === "end";
  const hasStartIcon = icon && iconPosition === "start";

  return (
    <button
      className={classes}
      type={nativeType}
      disabled={disabled}
      onClick={onClick}
      style={{ "--btn-color-mode": `var(--${color})` }}
    >
      <div className="btn__wrapper">
        {hasStartIcon && icon}
        {children && <div>{children}</div>}
        {hasEndIcon && icon}
      </div>

      {loading && <CircleLoader className="btn__loader" />}
    </button>
  );
};

export { Button };
