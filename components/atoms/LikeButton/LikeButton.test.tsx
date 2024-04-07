import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { LikeButton } from "./LikeButton";
import { describe, expect, it } from "vitest";

describe("LikeButton component", () => {
  it("renders correctly with default props", () => {
    const { container } = render(<LikeButton />);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).not.toHaveClass("likeButton");
  });

  it("applies className prop to button element", () => {
    const className = "custom-class";
    const { container } = render(<LikeButton className={className} />);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveClass(className);
  });

  it("renders EmptyHeartIcon when isLiked prop is false", () => {
    const { container } = render(<LikeButton />);
    const emptyHeartIconElement = container.querySelector(".emptyHeartIcon");
    expect(emptyHeartIconElement).toBeInTheDocument();
  });

  it("renders FilledHeartIcon when isLiked prop is true", () => {
    const { container } = render(<LikeButton isLiked />);
    const filledHeartIconElement = container.querySelector(".filledHeartIcon");
    expect(filledHeartIconElement).toBeInTheDocument();
  });

  it("applies iconClassName prop to icon elements", () => {
    const iconClassName = "custom-icon-class";
    const { container } = render(<LikeButton iconClassName={iconClassName} />);
    const emptyHeartIconElement = container.querySelector(".emptyHeartIcon");
    const filledHeartIconElement = container.querySelector(".filledHeartIcon");
    expect(emptyHeartIconElement).toHaveClass(iconClassName);
    expect(filledHeartIconElement).toHaveClass(iconClassName);
  });

  it("fires onClick event when button is clicked", () => {
    const handleClick = jest.fn();
    const { container } = render(<LikeButton onClick={handleClick} />);
    const buttonElement = container.querySelector("button");
    if (!buttonElement) throw new Error("No Button Found!");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Add more test cases as needed
});
