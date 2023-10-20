export interface SelectOption {
  value: string | number;
  label: string | number;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  options: SelectOption[];
  value: SelectOption | null;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  onChange?: (option: SelectProps['value']) => void;
}
