import { ButtonProps } from "./types";
import { FC, ElementType, HTMLProps } from "react";
import classNames from "classnames";
import "./index.scss";
import { CircleLoader } from "@/shared/ui";
import { isStartsWithHttp } from "@/shared/lib/utils/url";

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
  to,
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

  const Root: ElementType = to ? "a" : "button";

  const isExternalLink = to && isStartsWithHttp(to);

  const linkProps: HTMLProps<HTMLAnchorElement> = {
    href: to,
    target: isExternalLink ? "_blank" : "_self",
  };

  const buttonProps: HTMLProps<HTMLButtonElement> = {
    type: nativeType,
    disabled,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extendingProps = (Root === "a" ? linkProps : buttonProps) as any;

  return (
    <Root
      className={classes}
      data-testid="button"
      style={{ "--btn-color-mode": `var(--${color})` }}
      onClick={onClick}
      {...extendingProps}
    >
      <div data-testid="button-wrapper" className="btn__wrapper">
        {hasStartIcon && icon}
        {children && <div data-testid="button-content">{children}</div>}
        {hasEndIcon && icon}
      </div>

      {loading && (
        <CircleLoader data-testid="button-loader" className="btn__loader" />
      )}
    </Root>
  );
};

export default Button;
