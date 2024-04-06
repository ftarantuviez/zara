import { Navbar } from "@/components";
import React, { FC, ReactNode } from "react";

type MainLayoutProps = Readonly<{ className?: string; children?: ReactNode }>;

export const MainLayout: FC<MainLayoutProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <Navbar />
      {children}
    </div>
  );
};
