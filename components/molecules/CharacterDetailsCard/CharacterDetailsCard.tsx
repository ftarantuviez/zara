"use client";
import { Character } from "@/types";
import React, { FunctionComponent, useMemo } from "react";
import "./styles.css";
import Image from "next/image";
import { LikeButton, Text } from "@/components";
import { useOnClickLikeCharacter } from "@/hooks";

type Props = Readonly<{
  readonly character: Character;
}>;

export const CharacterDetailsCard: FunctionComponent<Props> = ({
  character,
}) => {
  const onClickLike = useOnClickLikeCharacter();
  const thumbnail = useMemo(() => {
    if (!character.thumbnail) return "No Image Found";

    return `${character.thumbnail.path}.${character.thumbnail.extension}`;
  }, [character]);

  return (
    <div className="characterDetails" data-testid="characterDetails">
      <div className="characterDetails__cont">
        <div className="characterDetails__image">
          <Image
            src={thumbnail}
            height="320"
            width="320"
            alt={character.name ?? "Character"}
          />
        </div>
        <div className="characterDetails__info">
          <div className="characterDetails__title">
            <Text variant="h1" color="white">
              {character.name ?? "Unknown Character"}
            </Text>
            <LikeButton
              onClick={() => onClickLike(character.id)}
              iconClassName="characterDetails__icon"
              isLiked={character.isLiked}
              data-testid="characterDetailsCard-likeButton"
            />
          </div>
          <Text color="white" className="characterDetails__desc">
            {character.description ?? ""}
          </Text>
        </div>
      </div>
    </div>
  );
};
