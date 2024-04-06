import React, { FunctionComponent } from "react";
import "./styles.css";
import { EmptyHeartIcon, FilledHeartIcon } from "@/assets";
import clsx from "clsx";

export interface LikeButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLiked?: Readonly<boolean>;
}

export const LikeButton: FunctionComponent<LikeButtonProps> = ({
  isLiked,
  className,
  ...rest
}) => {
  const classNames = clsx("likeButton", className);
  return (
    <button className={classNames} {...rest}>
      {isLiked ? <FilledHeartIcon /> : <EmptyHeartIcon />}
    </button>
  );
};
