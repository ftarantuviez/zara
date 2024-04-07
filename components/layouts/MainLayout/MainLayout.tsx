"use client";
import { Alert, Navbar } from "@/components";
import clsx from "clsx";
import React, { FC, ReactNode } from "react";
import "./styles.css";
import { useCharactersContext } from "@/contexts";

type MainLayoutProps = Readonly<{ className?: string; children?: ReactNode }>;

export const MainLayout: FC<MainLayoutProps> = ({ className, children }) => {
  const { error } = useCharactersContext();
  const classNames = clsx("mainLayout", className);
  return (
    <div className={classNames} data-testid="mainLayout">
      <Navbar />
      {error.isError && (
        <div className="mainLayout__error">
          <Alert
            message={
              error.message ?? "There was an error. Please try again later"
            }
            title="Error"
            type="error"
          />
        </div>
      )}
      {!error.isError && <div className="mainLayout__content">{children}</div>}
    </div>
  );
};
