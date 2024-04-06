import { Text } from "@/components";
import { AlertType } from "@/contexts";
import clsx from "clsx";
import React, { FunctionComponent, useMemo } from "react";
import { MdError, MdWarning, MdInfo, MdCheck, MdClose } from "react-icons/md";
import "./styles.css";

type Props = Readonly<{
  /**
   * Alert feedback type.
   *
   * *Possibilities*: warning | error | info | success
   *
   * Default: info
   */
  type?: AlertType;
  /**
   * Title to show in alert
   */
  title?: string;
  /**
   * Alert message
   */
  message?: string;
  /**
   * Alert classname for styles
   */
  className?: string;
}>;

export const Alert: FunctionComponent<Props> = ({
  type = "info",
  title,
  message,
}) => {
  const classNames = useMemo(() => clsx("alert", `alert-${type}`), [type]);
  const textClassNames = useMemo(() => clsx(`alert__text-${type}`), [type]);

  const icon = useMemo(() => {
    if (type === "info") return <MdInfo />;
    else if (type === "warning") return <MdWarning />;
    else if (type === "success") return <MdCheck />;
    return <MdError fill="red" />;
  }, [type]);

  return (
    <div className={classNames}>
      {icon}

      {title && <Text className={textClassNames}>{title}</Text>}
      <Text className={textClassNames} variant="body2">
        {message}
      </Text>
    </div>
  );
};
