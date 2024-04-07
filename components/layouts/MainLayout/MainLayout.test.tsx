import { it, expect, describe, afterEach } from "vitest";
import { MainLayout } from "./MainLayout";
import { cleanup, render } from "@testing-library/react";

describe("Main Layout Component", () => {
  afterEach(cleanup);
  it("MainLayout component renders correctly with default props", () => {
    const { getByTestId } = render(<MainLayout />);
    const mainLayoutElement = getByTestId("mainLayout");
    const navbarElement = getByTestId("navbar");
    expect(mainLayoutElement).toBeInTheDocument();
    expect(navbarElement).toBeInTheDocument();
    expect(mainLayoutElement).toHaveClass("mainLayout");
  });

  it("MainLayout component applies className prop correctly", () => {
    const { getByTestId } = render(<MainLayout className="custom-class" />);
    const mainLayoutElement = getByTestId("mainLayout");
    expect(mainLayoutElement).toHaveClass("custom-class");
  });

  it("MainLayout component renders children correctly", () => {
    const childText = "Hello, World!";
    const { getByText } = render(<MainLayout>{childText}</MainLayout>);
    const contentElement = getByText(childText);
    expect(contentElement).toBeInTheDocument();
  });
});
