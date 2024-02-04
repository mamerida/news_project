import { render, screen } from "@testing-library/react";
import { CustomSelect } from "./CustomSelect";

describe('CustomSelect', () => {

  it('should render select element with options', () => {
    const options = [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ];
    const name = "testSelect";
    const value = "2";
    const onChange = jest.fn();
    render(<CustomSelect options={options} name={name} value={value} onChange={onChange} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue("2");
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });
});
