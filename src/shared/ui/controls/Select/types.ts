export interface SelectOption {
  value: string | number;
  label: string | number;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  options: SelectOption[];
  value: SelectOption;
  disabled?: boolean;
  onChange?: (option: SelectOption) => void;
}
