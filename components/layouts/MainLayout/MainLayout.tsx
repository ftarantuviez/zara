import { Navbar } from "@/components";
import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import "./styles.css";

type MainLayoutProps = Readonly<{ className?: string; children?: ReactNode }>;

export const MainLayout: FC<MainLayoutProps> = ({ className, children }) => {
  const classNames = clsx("mainLayout", className);
  return (
    <div className={classNames}>
      <Navbar />
      <div className="mainLayout__content">{children}</div>
    </div>
  );
};
