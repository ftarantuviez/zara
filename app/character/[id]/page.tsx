"use client";

import { useCharactersContext } from "@/contexts";
import { useParams } from "next/navigation";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import "./styles.css";
import { Comic, ComicDataWrapper } from "@/types";
import client from "@/config/client";
import { CharacterDetailsCard, ComicsGrid, Text } from "@/components";

const sortByFocDates = (a: Comic, b: Comic): number => {
  const date1 = new Date(
    a.dates?.find((d) => d.type === "focDate")?.date ?? ""
  );
  const date2 = new Date(
    b.dates?.find((d) => d.type === "focDate")?.date ?? ""
  );

  return date1.getTime() - date2.getTime();
};

const Character: FunctionComponent = () => {
  const { id } = useParams();
  const { characters } = useCharactersContext();
  const [loadingComics, setLoadingComics] = useState(false);
  const [comics, setComics] = useState<Comic[]>([]);

  const character = useMemo(
    () => characters.find((char) => char.id === Number(id)),
    [id, characters]
  );

  useEffect(() => {
    if (character) {
      (async () => {
        try {
          setLoadingComics(true);
          const { data } = await client.get<ComicDataWrapper>(
            `/public/characters/${character.id}/comics?limit=20`
          );
          setLoadingComics(false);
          setComics(data.data?.results ?? []);
        } catch (error) {
          setLoadingComics(false);
        }
      })();
    }
  }, [character]);

  const sortedComics = useMemo(() => {
    return comics.sort(sortByFocDates);
  }, [comics]);

  if (!character) return <Text variant="h2">Character not found</Text>;
  return (
    <div className="characterPage">
      <CharacterDetailsCard character={character} />
      <div className="characterPage__cont">
        {loadingComics ? (
          <Text variant="h2">LOADING COMICS...</Text>
        ) : (
          <Text variant="h2">COMICS</Text>
        )}

        <ComicsGrid comics={sortedComics} />
      </div>
    </div>
  );
};

export default Character;
