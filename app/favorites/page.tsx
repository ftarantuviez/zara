"use client";

import { CharactersGridWithSearch, LoadingScreen, Text } from "@/components";
import { useCharactersContext } from "@/contexts";
import { useMemo } from "react";
import "./styles.css";

export default function Favorites() {
  const { characters, isLoading } = useCharactersContext();

  const likedCharacters = useMemo(
    () => characters.filter((c) => !!c.isLiked),
    [characters]
  );

  if (isLoading) return <LoadingScreen />;
  return (
    <div className="favorites">
      <Text variant="h4">Favorites</Text>
      <CharactersGridWithSearch characters={likedCharacters} />
    </div>
  );
}
