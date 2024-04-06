"use client";
import { SearchIcon } from "@/assets";
import { Input, InputProps } from "@/components";
import clsx from "clsx";
import React, { FunctionComponent, useCallback, useMemo, useRef } from "react";
import "./styles.css";

export type SearchInputProps = Readonly<{
  inputProps?: Omit<
    InputProps,
    "value" | "onChange" | "placeholder" | "fullWidth"
  >;
  className?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  fullWidth?: boolean;
}>;

export const SearchInput: FunctionComponent<SearchInputProps> = ({
  className,
  value,
  onChange,
  placeholder,
  inputProps,
  fullWidth,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const classNames = useMemo(
    () => clsx("searchInput", fullWidth && "searchInput-fullWidth", className),
    [className, fullWidth]
  );

  const handleSearchIconClick = useCallback(() => {
    if (inputRef.current === null) {
      throw new Error("Button was clicked, but inputRef is null");
    }

    return inputRef.current.focus();
  }, []);

  return (
    <div className={classNames}>
      <button className="searchInput__icon" onClick={handleSearchIconClick}>
        <SearchIcon />
      </button>

      <Input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        fullWidth={fullWidth}
        className="searchInput__input"
        innerRef={inputRef}
        {...inputProps}
      />
    </div>
  );
};
