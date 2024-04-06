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
  /**
   * Allows getting a ref to the component instance.
   * Once the component unmounts, React will set `ref.current` to `null`
   * (or call the ref with `null` if you passed a callback ref).
   *
   * @see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}
   */
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
