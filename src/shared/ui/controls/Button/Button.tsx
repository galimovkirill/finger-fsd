import { ButtonProps } from "./types";
import s from "./styles.module.scss";
import { FC } from "react";

const Loader: FC = () => {
  return <div>Loader</div>;
};

const Button: FC<ButtonProps> = ({ children, disabled, loading, onClick }) => {
  const buttonClasses = [s.button, disabled ? "button--disabled" : ""].join(
    " "
  );

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {loading && <Loader />}
      {children}
    </button>
  );
};

export { Button };
