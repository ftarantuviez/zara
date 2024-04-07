import { test, expect, it, describe, afterEach } from "vitest";
import { Alert } from "./Alert";
import { cleanup, render } from "@testing-library/react";

describe("Alert Component", () => {
  afterEach(cleanup);
  it("Alert component renders correctly with default props", () => {
    const { getByTestId } = render(<Alert />);
    const alertElement = getByTestId("alert");
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveClass("alert");
    expect(alertElement).toHaveClass("alert-info");
  });

  it("Alert component applies type prop correctly (warning)", () => {
    const { getByTestId } = render(<Alert type="warning" />);
    const alertElement = getByTestId("alert");
    expect(alertElement).toHaveClass("alert-warning");
  });

  it("Alert component applies type prop correctly (error)", () => {
    const { getByTestId } = render(<Alert type="error" />);
    const alertElement = getByTestId("alert");
    expect(alertElement).toHaveClass("alert-error");
  });

  it("Alert component applies type prop correctly (success)", () => {
    const { getByTestId } = render(<Alert type="success" />);
    const alertElement = getByTestId("alert");
    expect(alertElement).toHaveClass("alert-success");
  });

  it("Alert component renders title correctly", () => {
    const title = "Title";
    const { getByText } = render(<Alert title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it("Alert component renders message correctly", () => {
    const message = "Message";
    const { getByText } = render(<Alert message={message} />);
    const messageElement = getByText(message);
    expect(messageElement).toBeInTheDocument();
  });
});
