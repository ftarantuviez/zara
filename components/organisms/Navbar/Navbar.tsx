import React, { FC } from "react";
import "./styles.css";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components";
import { FilledHeartIcon } from "@/assets";

type NavbarProps = Readonly<{
  className?: string;
}>;

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={clsx("navbar", className)}>
      <Link href="/">
        <Image
          src="/svg/marvel-logo.svg"
          alt="Marvel"
          width="130"
          height="52"
          priority
        />
      </Link>
      <Link href="/favorites" className="navbar__favoriteSection">
        <FilledHeartIcon className="navbar__heartIcon" />
        <Text color="white">1</Text>
      </Link>
    </div>
  );
};
