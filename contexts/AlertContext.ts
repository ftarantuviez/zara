import { createContext, useContext } from "react";

export type AlertType = "error" | "warning" | "info" | "success";

export type OpenAlertInput = Readonly<{
  type: AlertType;
  title?: string;
  message?: string;
}>;

export const AlertContext = createContext<(input?: OpenAlertInput) => void>(
  () => {}
);

export const useAlert = () => useContext(AlertContext);