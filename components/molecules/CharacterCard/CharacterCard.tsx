import clsx from "clsx";
import Image from "next/image";
import React, { FunctionComponent, useMemo } from "react";
import "./styles.css";
import { LikeButton, Text } from "@/components";
import { Character } from "@/types";

export type CharacterCardProps = Readonly<{
  /**
   * Custom className for card
   */
  className?: string;
  /**
   * Character information. It will be displayed in the card
   */
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

  const thumbnail = useMemo(() => {
    if (!character.thumbnail) return "No Image Found";

    return `${character.thumbnail.path}.${character.thumbnail.extension}`;
  }, [character]);

  return (
    <div className={classNames}>
      <Image src={thumbnail} alt="" height={180} width={180} />

      <div className="characterCard__separator" />

      <div className="characterCard__info">
        <Text color="white">{character.name ?? "Unknown Character"}</Text>
        <LikeButton />
        <div className="characterCard__triangle" />
      </div>
    </div>
  );
};
