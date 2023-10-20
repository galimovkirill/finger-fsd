import { SelectOption, SelectProps } from "@/shared/ui/controls/Select/types";
import { FC, useRef, useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import "./index.scss";
import classNames from "classnames";
import { useClickOutside } from "@react-hookz/web";

const Select: FC<SelectProps> = ({
  options,
  value: selectedOption,
  onChange,
  disabled,
  ...props
}) => {
  const [isDropdownShown, setDropdownStatus] = useState(false);
  const ref = useRef(null);

  const rootClasses = classNames("select", disabled && "select--disabled");

  const onFieldClick = () => {
    if (disabled) {
      return;
    }

    setDropdownStatus(!isDropdownShown);
  };

  const onChangeHandler = (option: SelectOption) => {
    if (!onChange || option.disabled) {
      return;
    }

    onChange(option);
    setDropdownStatus(false);
  };

  const getOptionClasses = (option: SelectOption) =>
    classNames(
      "select-option",
      option.disabled && "select-option--disabled",
      selectedOption.value === option.value && "select-option--active"
    );

  useClickOutside(ref, () => {
    setDropdownStatus(false);
  });

  return (
    <div ref={ref} className={rootClasses} {...props}>
      <div
        className="select-field select__field"
        onClick={() => onFieldClick()}
      >
        <span className="select-field__value">{selectedOption.label}</span>
        <CaretDownOutlined className="select-field__arrow" />
      </div>

      {isDropdownShown && (
        <div className="select-dropdown select__dropdown">
          {options.map((option) => {
            return (
              <div
                className={getOptionClasses(option)}
                onClick={() => onChangeHandler(option)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
