import clsx from "clsx";
import React, { FC, useMemo } from "react";
import "./styles.css";

export interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  /**
   * Styling variant consistent with design system.
   *
   * Default: body1
   */
  variant?: Readonly<
    "body1" | "body2" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
  /**
   * Text with colors according theme palette.
   *
   * Default: black
   */
  color?: Readonly<"black" | "white">;
}

export const Text: FC<TextProps> = ({
  variant = "body1",
  className,
  children,
  color = "black",
  ...rest
}) => {
  const classNames = useMemo(
    () => clsx("text", `variant-${variant}`, `color-${color}`, className),
    [className, color, variant]
  );

  return (
    <p className={classNames} {...rest}>
      {children}
    </p>
  );
};
