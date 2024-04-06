import clsx from "clsx";
import Image from "next/image";
import React, { FunctionComponent, useMemo } from "react";
import "./styles.css";
import { LikeButton, Text } from "@/components";
import { Character } from "@/types";

export type CharacterCardProps = Readonly<{
  className?: string;
  character: Character;
}>;

export const CharacterCard: FunctionComponent<CharacterCardProps> = ({
  className,
  character,
}) => {
  const classNames = useMemo(
    () => clsx("characterCard", className),
    [className]
  );
  return (
    <div className={classNames}>
      <div className="characterCard__image">
        <Image
          src="https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="characterCard__separator" />

      <div className="characterCard__info">
        <Text color="white">{character.name ?? "Unknown Character"}</Text>
        <LikeButton />
        <div className="characterCard__triangle" />
      </div>
    </div>
  );
};
