"use client";
import React, { FC, useMemo } from "react";
import "./styles.css";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components";
import { FilledHeartIcon } from "@/assets";
import { useCharactersContext } from "@/contexts";

type NavbarProps = Readonly<{
  className?: string;
}>;

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { characters } = useCharactersContext();
  const classNames = useMemo(() => clsx("navbar", className), [className]);

  const likedCharactersCount = useMemo(
    () => characters.filter((c) => c.isLiked).length + 1,
    [characters]
  );

  return (
    <div className={classNames}>
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
        <Text color="white">{likedCharactersCount}</Text>
      </Link>
    </div>
  );
};
