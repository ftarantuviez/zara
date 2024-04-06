"use client";
import clsx from "clsx";
import React, { useEffect, useMemo, useState } from "react";
import { MdClose } from "react-icons/md";

type SnackbarProps = Readonly<{
  /**
   * Position where snackbar will be opened
   */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /**
   * Component rendered inside of snackbar
   */
  children?: React.ReactNode;
  /**
   * Time which is gonna be opened
   *
   * Unit: ms
   */
  duration?: number;
  /**
   * If true, it'll be displayed in the screen
   */
  open?: boolean;
  /**
   * Custom styles
   */
  className?: string;
}>;

export const Snackbar: React.FC<SnackbarProps> = ({
  position = "bottom-right",
  children,
  duration = 6000,
  open,
  className,
}) => {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (open) {
        setVisible(false);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, open]);

  useEffect(() => {
    setVisible(open);
  }, [open]);

  const classNames = useMemo(
    () => clsx("snackbar", `snackbar-${position}`, className),
    [position, className]
  );

  return (
    <React.Fragment>
      {visible && (
        <div className={classNames}>
          <button
            className="snackbar__closeButton"
            onClick={() => setVisible(!visible)}
          >
            <MdClose color="white" />
          </button>
          {children}
        </div>
      )}
    </React.Fragment>
  );
};
