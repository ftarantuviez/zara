"use client";
import { AlertContext, OpenAlertInput } from "@/contexts";
import { Alert, Snackbar } from "..";
import React, { FC, PropsWithChildren, useState, useCallback } from "react";

type InternalAlertManagerProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  data?: OpenAlertInput;
};
const InternalAlertManager: FC<InternalAlertManagerProps> = ({
  children,
  isOpen,
  data,
}) => {
  return (
    <React.Fragment>
      {children}
      <Snackbar open={isOpen}>
        <Alert
          title={data?.title}
          message={data?.message}
          type={data?.type}
          className="max-w-[500px]"
        />
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
