import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";


describe('Input', () => {

    it('should render an input element with the given props', () => {
      const type = "text";
      const placeholder = "Enter text";
      const name = "inputName";
      const value = "inputValue";
      const onChange = jest.fn();
      const onEnter = jest.fn();
      const icon = <i className="icon" />;

      render(
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onEnter={onEnter}
          icon={icon}
        />
      );
  
      expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute("type", type);
      expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute("name", name);
      expect(screen.getByPlaceholderText(placeholder)).toHaveValue(value);
      expect(onChange).toHaveBeenCalledTimes(0);
      expect(onEnter).toHaveBeenCalledTimes(0);
    });

    it('should call the onChange callback when the input value changes', () => {
      const onChange = jest.fn();
      render(<Input onChange={onChange} />);
  
      fireEvent.change(screen.getByRole("textbox"), { target: { value: "new value" } });
  
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should execute the onEnter callback when the Enter key is pressed', () => {
      const onEnter = jest.fn();
      render(<Input onEnter={onEnter} />);
  
      fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter" });

      expect(onEnter).toHaveBeenCalledTimes(1);
    });
});
