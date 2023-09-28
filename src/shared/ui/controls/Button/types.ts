type ButtonSize = "small" | "medium" | "large";
type ButtonType = "default" | "flat" | "outline";
type ButtonColor = "primary" | "success" | "danger";
type ButtonIconPosition = "start" | "end";

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  color?: ButtonColor;
  nativeType?: HTMLButtonElement["type"];
  disabled?: boolean;
  block?: boolean;
  active?: boolean;
  uppercase?: boolean;
  icon?: JSX.Element;
  iconPosition?: ButtonIconPosition;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
