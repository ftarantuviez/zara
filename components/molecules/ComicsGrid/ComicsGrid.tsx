import { Comic } from "@/types";
import React, { FC } from "react";
import "./styles.css";
import Image from "next/image";
import { Text } from "@/components";

type Props = {
  readonly comics: Comic[];
};

const getLaunchDate = (c: Comic): string => {
  const date = c.dates?.find((d) => d.type === "focDate");

  if (!date || !date.date) return "XXXX";

  const fullYear = new Date(date.date).getFullYear();
  if (isNaN(fullYear)) return "XXXX";

  return String(fullYear);
};
export const ComicsGrid: FC<Props> = ({ comics }) => {
  return (
    <div className="comicsGrid">
      {comics?.map((comic) => (
        <div key={comic.id} className="comicsGrid__card">
          <Image
            src={comic.thumbnail?.path + "." + comic.thumbnail?.extension}
            alt={comic.title ?? "Unknown Comic"}
            height={400}
            width={240}
            className="comicsGrid__image"
          />
          <Text className="comicsGrid__title" variant="body2">
            {comic.title}
          </Text>
          <Text className="comicsGrid__year" variant="body2">
            {getLaunchDate(comic)}
          </Text>
        </div>
      ))}
    </div>
  );
};
