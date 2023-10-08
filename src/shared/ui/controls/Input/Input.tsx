import { InputProps } from "@/shared/ui/controls/Input/types";
import { FC, useState } from "react";
import "./styles/index.scss";
import classNames from "classnames";

/**
 * TODO: write tests:
 * - check for each input types (text, password, number)
 * - check for placeholder
 * - check for disabled status
 */

/**
 * TODO:
 * - change text color for disabled input
 */

const Input: FC<InputProps> = ({
  size = "medium",
  value: inputValue,
  disabled,
  onChange,
  placeholderAsLabel,
  startIcon,
  endIcon,
  ...props
}) => {
  const [isFocused, setFocused] = useState(false);

  const value = inputValue || props.defaultValue;

  const classes = classNames(
    "input",
    `input--${size}`,
    isFocused && "input--focused",
    disabled && "input--disabled",
    value && "input--has-value",
    startIcon && "input--has-start-icon",
    endIcon && "input--has-end-icon"
  );

  const placeholderClasses = classNames(
    "input__placeholder",
    placeholderAsLabel && "input__placeholder--as-label"
  );

  const isPlaceholderShown = () => {
    if (!props.placeholder) {
      return false;
    }

    if (placeholderAsLabel) {
      return true;
    }

    return !value;
  };

  return (
    <div className={classes}>
      <div className="input__wrapper">
        {isPlaceholderShown() && (
          <span className={placeholderClasses}>{props.placeholder}</span>
        )}

        {startIcon && <div className="input__start-icon">{startIcon}</div>}

        <input
          type="text"
          {...props}
          value={value}
          disabled={disabled}
          className="input__el"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
        />

        {endIcon && <div className="input__end-icon">{endIcon}</div>}
      </div>
    </div>
  );
};

export default Input;
