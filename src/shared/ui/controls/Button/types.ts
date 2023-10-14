import { ControlElementSize } from "@/shared/ui/controls/types";

type ButtonSize = ControlElementSize;
type ButtonType = "default" | "flat" | "outline";
type ButtonColor = "primary" | "success" | "danger";
type ButtonIconPosition = "start" | "end";

interface SpecificButtonProps {
  nativeType?: HTMLButtonElement["type"];
}

interface LinkButtonProps {
  /**
   * Make root element of button as link (html `a` tag) with selected href.
   * If link starts with `http` it will automatically add `target="_blank"` attribute.
   * If you want to use react-router's `{Link}`, make programmatically navigation (like `useNavigate`)
   */
  to?: string;
}

interface BaseButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  block?: boolean;
  active?: boolean;
  uppercase?: boolean;
  icon?: JSX.Element;
  iconPosition?: ButtonIconPosition;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export interface ButtonProps
  extends BaseButtonProps,
    SpecificButtonProps,
    LinkButtonProps {}
