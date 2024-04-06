"use client";
import { AlertContext, OpenAlertInput } from "@/contexts";
import { Alert, Snackbar } from "..";
import React, { FC, PropsWithChildren, useState, useCallback } from "react";

type InternalAlertManagerProps = Readonly<{
  /**
   * Components inside of this provider
   */
  children: React.ReactNode;
  /**
   * If `true`, alerts popups
   */
  isOpen?: boolean;
  /**
   * Information for alert
   */
  data?: OpenAlertInput;
}>;
const InternalAlertManager: FC<InternalAlertManagerProps> = ({
  children,
  isOpen,
  data,
}) => {
  return (
    <React.Fragment>
      {children}
      <Snackbar open={isOpen}>
        <Alert title={data?.title} message={data?.message} type={data?.type} />
      </Snackbar>
    </React.Fragment>
  );
};

export const AlertProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<OpenAlertInput>();
  const openAlert = useCallback(
    (input?: OpenAlertInput) => {
      setIsOpen(true);
      setData(input);
    },
    [setIsOpen, setData]
  );
  return (
    <AlertContext.Provider value={openAlert}>
      <InternalAlertManager isOpen={isOpen} data={data}>
        {children}
      </InternalAlertManager>
    </AlertContext.Provider>
  );
};
