import clsx from "clsx";
import React, { FunctionComponent, useMemo } from "react";
import "./styles.css";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /**
   * If true, input will take the total width of its parent container
   *
   * Default: false
   */
  fullWidth?: boolean;
  innerRef?: React.RefObject<HTMLInputElement>;
}

export const Input: FunctionComponent<InputProps> = ({
  className,
  fullWidth,
  innerRef,
  ...rest
}) => {
  const classNames = useMemo(
    () => clsx("input", fullWidth && "input-fullWidth", className),
    [className, fullWidth]
  );
  return <input className={classNames} ref={innerRef} {...rest} />;
};
