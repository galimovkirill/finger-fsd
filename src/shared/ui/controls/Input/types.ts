import { ControlElementSize } from "@/shared/ui/controls/types";
import { HTMLProps } from "react";

type InputSize = ControlElementSize;

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, "size"> {
  size?: InputSize;
  placeholderAsLabel?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}
