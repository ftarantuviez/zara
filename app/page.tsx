"use client";
import { CharactersGridWithSearch, LoadingScreen } from "@/components";
import { useCharactersContext } from "@/contexts";
import "./styles.css";

export default function Home() {
  const { characters, isLoading } = useCharactersContext();

  if (isLoading) return <LoadingScreen />;
  return (
    <main className="home">
      <CharactersGridWithSearch characters={characters} />
    </main>
  );
}
