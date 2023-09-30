import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { ButtonProps } from "./types";
import { UserOutlined } from "@ant-design/icons";

describe("button component", () => {
  const renderBtn = (props?: Partial<ButtonProps>) =>
    render(
      <Button {...props}>
        {props && Object.prototype.hasOwnProperty.call(props, "children")
          ? props.children
          : "Button"}
      </Button>
    );

  const getBtn = () => screen.getByTestId("button");
  const getBtnWrapper = () => screen.getByTestId("button-wrapper");
  const getBtnIcon = () => getBtn().querySelector(".anticon") as HTMLElement;

  it("should render with text", () => {
    renderBtn();
    const btn = getBtn();
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent(/button/i);
  });

  it("should have button type", () => {
    renderBtn();
    const btn = getBtn();
    expect(btn).toHaveAttribute("type", "button");
  });

  it("should have type submit", () => {
    renderBtn({ nativeType: "submit" });
    const btn = getBtn();
    expect(btn).toHaveAttribute("type", "submit");
  });

  it("should be disabled", () => {
    renderBtn({ disabled: true });
    const btn = getBtn();
    expect(btn).toHaveAttribute("disabled");
    expect(btn).toHaveClass("btn--disabled");
  });

  it("should have class `btn--block`", () => {
    renderBtn({ block: true });
    const btn = getBtn();
    expect(btn).toHaveClass("btn--block");
  });

  it("should have class `btn--active`", () => {
    renderBtn({ active: true });
    const btn = getBtn();
    expect(btn).toHaveClass("btn--active");
  });

  it("should have class `btn--uppercase`", () => {
    renderBtn({ uppercase: true });
    const btn = getBtn();
    expect(btn).toHaveClass("btn--uppercase");
  });

  it("should have icon", () => {
    renderBtn({ icon: <UserOutlined /> });
    expect(getBtn()).toContainElement(getBtnIcon());
  });

  it("should have icon at start", () => {
    renderBtn({ icon: <UserOutlined />, iconPosition: "start" });
    expect(getBtnWrapper().firstChild).toBe(getBtnIcon());
  });

  it("should have icon at the end", () => {
    renderBtn({ icon: <UserOutlined />, iconPosition: "end" });
    expect(getBtnWrapper().lastChild).toBe(getBtnIcon());
  });

  it("should have icon without content", () => {
    renderBtn({ icon: <UserOutlined />, children: "" });
    const btnContent = screen.queryByTestId("button-content");
    expect(btnContent).not.toBeInTheDocument();
  });

  it("should have loader", () => {
    const btn = renderBtn({ loading: false });
    expect(screen.queryByTestId("button-loader")).not.toBeInTheDocument();

    btn.rerender(<Button loading />);
    expect(screen.queryByTestId("button-loader")).toBeInTheDocument();
  });

  it("should trigger on click event", () => {
    let isValid = false;
    const testClick = () => {
      isValid = true;
    };

    renderBtn({ onClick: testClick });
    expect(isValid).toBe(false);
    fireEvent.click(getBtn());
    expect(isValid).toBe(true);
  });
});
