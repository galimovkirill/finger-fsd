import { FC } from "react";
import "./index.scss";
import classNames from "classnames";

interface CircleLoaderProps {
  "data-testid"?: string;
  className?: string;
}

const CircleLoader: FC<CircleLoaderProps> = ({ className, ...props }) => {
  const classes = classNames("loader", className || "");

  return (
    <div className={classes} {...props}>
      <span
        className="loader__circle"
        style={{ width: "18px", height: "18px", borderWidth: "3px" }}
      />
    </div>
  );
};

export { CircleLoader };
