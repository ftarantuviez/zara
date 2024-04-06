import React, { FunctionComponent, SVGProps } from "react";

export const FilledHeartIcon: FunctionComponent<SVGProps<SVGSVGElement>> = ({
  ...rest
}) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.80348L6 0.161865L0 3.80348V11.607L12 21.8382L24 11.607V3.80348L18 0.161865L12 3.80348Z"
        fill="#EC1D24"
      />
    </svg>
  );
};
