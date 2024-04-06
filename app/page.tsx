import styles from "./page.module.css";
import { CharacterCard, SearchInput } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchInput placeholder="Search a character..." fullWidth />
      <CharacterCard character={{}} />
    </main>
  );
}
