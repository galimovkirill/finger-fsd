import { Input } from "@/shared/ui";
import "./index.scss";
import { InputProps } from "./types";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { UserOutlined } from "@ant-design/icons";

describe("input component", () => {
  const renderInput = (props?: Partial<InputProps>) =>
    render(<Input {...props} />);

  const getRoot = () => screen.getByTestId("input");
  const getInput = () => screen.getByTestId<HTMLInputElement>("input-element");
  const getInputPlaceholder = () => screen.getByTestId("input-placeholder");
  const getInputStartIcon = () => screen.getByTestId("input-start-icon");
  const getInputEndIcon = () => screen.getByTestId("input-end-icon");
  // const getInputClearButton = () => screen.getByTestId("input-clear");

  it("should render", () => {
    renderInput();
    const root = getRoot();
    expect(root).toBeInTheDocument();
  });

  it("should have placeholder", () => {
    renderInput({ placeholder: "Your name" });
    const placeholder = getInputPlaceholder();
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveTextContent(/Your name/i);

    const input = getInput();
    expect(input).toHaveAttribute("placeholder", "Your name");
  });

  it("should have `--focused` postfix when focused", () => {
    renderInput({ placeholder: "Your name" });

    const root = getRoot();
    const input = getInput();
    act(() => input.focus());

    expect(input).toHaveFocus();
    expect(root).toHaveClass("input--focused");
  });

  it("should have `--has-value` postfix", () => {
    renderInput({ placeholder: "Your name", value: "Kirill" });

    const input = getInput();
    const root = getRoot();

    expect(input).toHaveValue("Kirill");
    expect(root).toHaveClass("input--has-value");
  });

  it("should be disabled", () => {
    renderInput({ disabled: true });

    const root = getRoot();
    const input = getInput();

    expect(input.disabled).toBe(true);
    expect(root).toHaveClass("input--disabled");
  });

  describe("input icons", () => {
    it("should render start icon", () => {
      renderInput({ startIcon: <UserOutlined /> });
      const root = getRoot();
      const startIcon = getInputStartIcon();
      expect(startIcon).toBeInTheDocument();
      expect(root).toHaveClass("input--has-start-icon");
    });

    it("should render end icon", () => {
      renderInput({ endIcon: <UserOutlined /> });
      const root = getRoot();
      const endIcon = getInputEndIcon();
      expect(endIcon).toBeInTheDocument();
      expect(root).toHaveClass("input--has-end-icon");
    });

    it("should trigger handler on end icon click", () => {
      let counter = 0;
      renderInput({
        endIcon: <UserOutlined />,
        onEndIconClick: () => counter++,
      });
      const endIcon = getInputEndIcon();
      fireEvent.click(endIcon);
      expect(counter).toBe(1);
    });

    // TODO: fix it
    // it("should render clear icon and remove value on click", () => {
    //   renderInput({ clearable: true, value: "Hello world" });
    //   const root = getRoot();
    //   const input = getInput();
    //   const clearButton = getInputClearButton();

    //   expect(input).toHaveValue("Hello world");
    //   expect(root).toHaveClass("input--clearable");

    //   fireEvent.click(clearButton);
    //   expect(input).toHaveValue("");
    // });
  });
});
