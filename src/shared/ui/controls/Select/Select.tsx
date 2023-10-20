import { SelectOption, SelectProps } from "@/shared/ui/controls/Select/types";
import { FC, MouseEvent, useRef, useState } from "react";
import { CaretDownOutlined, CloseCircleOutlined } from "@ant-design/icons";
import "./index.scss";
import classNames from "classnames";
import { useClickOutside } from "@react-hookz/web";

const Select: FC<SelectProps> = ({
  options,
  value: selectedOption,
  onChange,
  disabled,
  clearable,
  placeholder,
  ...props
}) => {
  const [isDropdownShown, setDropdownStatus] = useState(false);
  const [isHovered, setHoverStatus] = useState(false);
  const ref = useRef(null);

  const rootClasses = classNames("select", disabled && "select--disabled");

  const getOptionClasses = (option: SelectOption) =>
    classNames(
      "select-option",
      option.disabled && "select-option--disabled",
      selectedOption?.value === option.value && "select-option--active"
    );

  const onFieldClick = () => {
    if (disabled) {
      return;
    }

    setDropdownStatus(!isDropdownShown);
  };

  const onChangeHandler = (newValue: SelectProps["value"]) => {
    if (!onChange || newValue?.disabled) {
      return;
    }

    onChange(newValue);
    setDropdownStatus(false);
  };

  const onClearButtonClick = (event: MouseEvent) => {
    event.stopPropagation();
    onChangeHandler(null);
  };

  useClickOutside(ref, () => {
    setDropdownStatus(false);
  });

  const FieldValue = () => {
    if (selectedOption?.label) {
      return (
        <span className="select-field__value">{selectedOption.label}</span>
      );
    }

    if (placeholder) {
      return <span className="select-field__placeholder">{placeholder}</span>;
    }

    return null;
  };

  const FieldIcons = () => {
    if (isHovered && clearable && selectedOption?.value) {
      return (
        <button
          onClick={onClearButtonClick}
          className="select-field__icon select-field__clear"
        >
          <CloseCircleOutlined />
        </button>
      );
    }

    return <CaretDownOutlined className="select-field__icon" />;
  };

  return (
    <div ref={ref} className={rootClasses} {...props}>
      <div
        className="select-field select__field"
        onClick={() => onFieldClick()}
        onMouseEnter={() => setHoverStatus(true)}
        onMouseLeave={() => setHoverStatus(false)}
      >
        <FieldValue />
        <FieldIcons />
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
