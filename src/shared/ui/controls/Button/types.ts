import { ButtonHTMLAttributes } from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonView = "default" | "flat" | "outline";
type ButtonColor = "primary" | "success" | "danger";
type ButtonIconPosition = "start" | "end";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: ButtonView;
  size?: ButtonSize;
  color?: ButtonColor;
  block?: boolean;
  active?: boolean;
  uppercase?: boolean;
  icon?: JSX.Element;
  iconPosition?: ButtonIconPosition;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}
