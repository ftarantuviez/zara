"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { FunctionComponent, useMemo } from "react";
import "./styles.css";
import { LikeButton, Text } from "@/components";
import { Character } from "@/types";
import { useOnClickLikeCharacter } from "@/hooks";
import { trucateString } from "@/utils";
import Link from "next/link";

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
  const onClickLike = useOnClickLikeCharacter();
  const classNames = useMemo(
    () => clsx("characterCard", className),
    [className]
  );

  const thumbnail = useMemo(() => {
    if (!character.thumbnail) return "No Image Found";

    return `${character.thumbnail.path}.${character.thumbnail.extension}`;
  }, [character]);

  return (
    <div className={classNames} data-testid="characterCard">
      <Link href={`/character/${character.id}`} className="characterCard__img">
        <Image
          src={thumbnail}
          alt={character.name ?? "Marvel"}
          fill
          sizes="290px"
          style={{ objectFit: "cover" }}
        />
      </Link>

      <div className="characterCard__separator" />

      <div className="characterCard__info">
        <Link href={`/character/${character.id}`}>
          <Text color="white">
            {trucateString(character.name ?? "Unknown")}
          </Text>
        </Link>
        <LikeButton
          onClick={() => onClickLike(character.id)}
          isLiked={character.isLiked}
          data-testid="characterCard-likeButton"
        />
        <div className="characterCard__triangle" />
      </div>
    </div>
  );
};
