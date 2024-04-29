import fs from "fs";
import { parse } from "csv-parse";

interface Movie {
  year: number;
  title: string;
  studios: string;
  producers: string;
  winner: boolean;
}

async function parseCSV(filePath: string): Promise<Movie[]> {
  const movies: Movie[] = [];
  let isFirstLine = true;

  const parser = fs.createReadStream(filePath).pipe(parse({ delimiter: ";"})
    .on("data", (row: string[]) => {
      if (isFirstLine) {
        isFirstLine = false;
        return;
      }
    })
  );

  for await (const record of parser) {
    const [year, title, studios, producers, winner] = record;

    const yearInt = parseInt(year);
      if (isNaN(yearInt)) {
        console.warn(`Year "${year}" is not a valid number for movie "${title}". Skipping this record.`);
        continue;
      }

    movies.push({
      year:yearInt,
      title,
      studios,
      producers,
      winner: winner.toLowerCase() === "yes"
    })

  }
  return movies;
}

export default parseCSV;