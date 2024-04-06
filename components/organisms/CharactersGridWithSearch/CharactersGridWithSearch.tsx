"use client";
import { SearchInput, Text, CharacterCard } from "@/components";
import { useCharactersContext } from "@/contexts";
import { Character } from "@/types";
import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from "react";
import "./styles.css";

type Props = {
  characters: Character[];
};

export const CharactersGridWithSearch: FunctionComponent<Props> = ({
  characters,
}) => {
  const [query, setQuery] = useState<string>("");

  const onQueryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    []
  );

  const charactersToShow = useMemo(() => {
    return characters.filter((char) =>
      char.name?.toLowerCase().includes(query.toLowerCase())
    );
  }, [characters, query]);

  return (
    <div className="characters">
      <div className="characters__search">
        <SearchInput
          placeholder="Search a character..."
          value={query}
          onChange={onQueryChange}
          fullWidth
        />
        <Text variant="body2">{charactersToShow.length} RESULTS</Text>
      </div>

      <div className="characters__itemsContainer">
        {charactersToShow.map((char) => (
          <div className="characters__itemsContainer--item" key={char.id}>
            <CharacterCard character={char} />
          </div>
        ))}
      </div>
    </div>
  );
};
