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
  view = "default",
  size = "medium",
  color = "primary",
  block,
  active,
  uppercase,
  loading,
  children,
  ...props
}) => {
  const classes = classNames(
    "btn",
    `btn--${color}`,
    `btn--${size}`,
    `btn--${view}`,
    block && "btn--block",
    active && "btn--active",
    props.disabled && "btn--disabled",
    uppercase && "btn--uppercase",
    !children && "btn--icon-only",
    loading && "btn--loading"
  );

  props.type = props.type || "button";

  const hasEndIcon = icon && iconPosition === "end";
  const hasStartIcon = icon && iconPosition === "start";

  return (
    <button
      className={classes}
      data-testid="button"
      style={{ "--btn-color-mode": `var(--${color})` }}
      {...props}
    >
      <div data-testid="button-wrapper" className="btn__wrapper">
        {hasStartIcon && icon}
        {children && <div data-testid="button-content">{children}</div>}
        {hasEndIcon && icon}
      </div>

      {loading && (
        <CircleLoader data-testid="button-loader" className="btn__loader" />
      )}
    </button>
  );
};

export { Button };
