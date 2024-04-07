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
  readonly isLiked?: boolean;
  /**
   * Value to check if button is liked or not. In case is *true*, is rendered a red heart.
   *
   * Default: false
   */
  readonly iconClassName?: string;
}

export const LikeButton: FunctionComponent<LikeButtonProps> = ({
  isLiked,
  className,
  iconClassName,
  ...rest
}) => {
  const classNames = useMemo(() => clsx("likeButton", className), [className]);
  return (
    <button className={classNames} {...rest}>
      {isLiked ? (
        <FilledHeartIcon className={iconClassName} />
      ) : (
        <EmptyHeartIcon className={iconClassName} />
      )}
    </button>
  );
};
