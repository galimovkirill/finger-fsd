import { InputProps } from "@/shared/ui/controls/Input/types";
import { FC, useState } from "react";
import "./index.scss";
import classNames from "classnames";
import { CloseCircleOutlined } from "@ant-design/icons";

/**
 * TODO: write tests:
 * - check for each input types (text, password, number)
 * - check for placeholder
 * - check for disabled status
 */

/**
 * TODO:
 * - add validation prop
 */

const Input: FC<InputProps> = ({
  size = "medium",
  value,
  disabled,
  onChange: onChangeHandler,
  onEndIconClick,
  placeholderAsLabel,
  startIcon,
  endIcon,
  clearable,
  ...props
}) => {
  const [isFocused, setFocused] = useState(false);
  const onChange = onChangeHandler ?? (() => {});

  const classes = classNames(
    "input",
    `input--${size}`,
    isFocused && "input--focused",
    disabled && "input--disabled",
    value && "input--has-value",
    startIcon && "input--has-start-icon",
    endIcon && "input--has-end-icon",
    clearable && "input--clearable",
    placeholderAsLabel && "input--as-label"
  );

  const getCssVars = () => {
    const basePadding = 12;
    const additionalPadding = 4;
    const iconSize = 14;
    const iconsGap = 6;

    // calculate padding left
    let paddingLeft = basePadding;
    if (startIcon) {
      paddingLeft += iconSize;
      paddingLeft += basePadding;
    }

    // calculate padding right
    let paddingRight = basePadding;
    if (clearable) paddingRight += iconSize;
    if (endIcon) paddingRight += iconSize;
    if (clearable || endIcon) paddingRight += additionalPadding;
    if (clearable && endIcon) paddingRight += iconsGap;

    const styles: React.CSSProperties = {
      "--input-base-padding-left": `${basePadding}px`,
      "--input-base-padding-right": `${basePadding}px`,
      "--input-current-padding-left": `${paddingLeft}px`,
      "--input-current-padding-right": `${paddingRight}px`,
      "--input-icon-size": `${iconSize}px`,
      "--input-icons-gap": `${iconsGap}px`,
    };

    return styles;
  };

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
    <div className={classes} style={getCssVars()}>
      <div className="input__wrapper">
        {isPlaceholderShown() && (
          <span className="input__placeholder">{props.placeholder}</span>
        )}

        <div className="input__icons input__icons--start">
          {startIcon && (
            <button className="input__start-icon">{startIcon}</button>
          )}
        </div>

        <input
          type="text"
          {...props}
          value={value}
          disabled={disabled}
          className="input__el"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
        />

        <div className="input__icons input__icons--end">
          {clearable && (
            <button style={{ cursor: "pointer" }} onClick={() => onChange("")}>
              <CloseCircleOutlined />
            </button>
          )}

          {endIcon && (
            <button
              onClick={onEndIconClick}
              style={{ cursor: onEndIconClick ? "pointer" : "default" }}
            >
              {endIcon}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
