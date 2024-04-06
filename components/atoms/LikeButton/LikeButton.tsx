import React, { FunctionComponent, useMemo } from "react";
import "./styles.css";
import { EmptyHeartIcon, FilledHeartIcon } from "@/assets";
import clsx from "clsx";

export interface LikeButtonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * Value to check if button is liked or not. In case is *true*, is rendered a red heart.
   *
   * Default: false
   */
  isLiked?: Readonly<boolean>;
}

export const LikeButton: FunctionComponent<LikeButtonProps> = ({
  isLiked,
  className,
  ...rest
}) => {
  const classNames = useMemo(() => clsx("likeButton", className), [className]);
  return (
    <button className={classNames} {...rest}>
      {isLiked ? <FilledHeartIcon /> : <EmptyHeartIcon />}
    </button>
  );
};
