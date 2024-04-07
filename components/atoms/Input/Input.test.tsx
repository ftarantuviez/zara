import { Input } from ".";
import { render, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Component:: Input", () => {
  it("renders input text with placeholder", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Test 1" />);

    const inputElement = getByPlaceholderText("Test 1");
    expect(inputElement).toBeInTheDocument();
  });

  it("updates input value on change", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Test 2" />);

    const inputElement = getByPlaceholderText("Test 2") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Hello, World!" } });

    expect(inputElement.value).toBe("Hello, World!");
  });

  it("handles input value state correctly", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Test 3" />);

    const inputElement = getByPlaceholderText("Test 3") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Testing" } });

    expect(inputElement.value).toBe("Testing");
  });

  it("Input disabled when prop is passed", async () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Test 4" disabled />
    );

    const inputElement = getByPlaceholderText("Test 4") as HTMLInputElement;

    expect(inputElement).toBeDisabled();
  });
});
