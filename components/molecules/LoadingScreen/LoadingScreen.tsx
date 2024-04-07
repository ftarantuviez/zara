import React, { FunctionComponent } from "react";
import "./styles.css";
import Image from "next/image";
import { Text } from "@/components";

export const LoadingScreen: FunctionComponent = () => {
  return (
    <div className="loadingScreen">
      <Image
        width="300"
        height="300"
        priority
        alt="Marvel"
        src="/svg/marvel-logo.svg"
      />
      <Text color="white" variant="h3">
        Loading...
      </Text>
    </div>
  );
};
