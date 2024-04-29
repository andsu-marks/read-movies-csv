/*
  Warnings:

  - You are about to alter the column `winner` on the `Movie` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
