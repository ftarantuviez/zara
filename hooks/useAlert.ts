import { AlertContext } from "@/contexts";
import { useContext } from "react";

export const useAlert = () => useContext(AlertContext);
