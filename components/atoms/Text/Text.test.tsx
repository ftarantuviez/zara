import { expect, it, describe } from "vitest";
import { render } from "@testing-library/react";
import { Text } from ".";

describe("Text component", () => {
  it("Text component renders correctly with default props", () => {
    const { getByText } = render(<Text>Hello, World!</Text>);
    const textElement = getByText("Hello, World!");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("text");
    expect(textElement).toHaveClass("variant-body1");
    expect(textElement).toHaveClass("color-black");
  });

  it("Text component applies variant prop correctly (h1)", () => {
    const { getByText } = render(<Text variant="h1">Heading 1</Text>);
    const textElement = getByText("Heading 1");
    expect(textElement).toHaveClass("variant-h1");
  });

  it("Text component applies variant prop correctly (h3)", () => {
    const { getByText } = render(<Text variant="h3">Heading 3</Text>);
    const textElement = getByText("Heading 3");
    expect(textElement).toHaveClass("variant-h3");
  });

  it("Text component applies color prop correctly (white)", () => {
    const { getByText } = render(<Text color="white">White Text</Text>);
    const textElement = getByText("White Text");
    expect(textElement).toHaveClass("color-white");
  });

  it("Text component applies color prop correctly (black)", () => {
    const { getByText } = render(<Text color="black">Black Text</Text>);
    const textElement = getByText("Black Text");
    expect(textElement).toHaveClass("color-black");
  });
});
