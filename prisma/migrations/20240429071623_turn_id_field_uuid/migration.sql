/*
  Warnings:

  - The primary key for the `Movie` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "year" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "studios" TEXT NOT NULL,
    "producers" TEXT NOT NULL,
    "winner" BOOLEAN NOT NULL
);
INSERT INTO "new_Movie" ("id", "producers", "studios", "title", "winner", "year") SELECT "id", "producers", "studios", "title", "winner", "year" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
