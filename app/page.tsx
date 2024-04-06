"use client";
import { CharactersGridWithSearch } from "@/components";
import { useCharactersContext } from "@/contexts";
import "./styles.css";

export default function Home() {
  const { characters } = useCharactersContext();
  return (
    <main className="home">
      <CharactersGridWithSearch characters={characters} />
    </main>
  );
}
