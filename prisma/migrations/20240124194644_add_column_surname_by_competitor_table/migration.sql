/*
  Warnings:

  - Added the required column `surname` to the `competitors` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_competitors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "avatar" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_competitors" ("avatar", "createdAt", "id", "name", "updatedAt") SELECT "avatar", "createdAt", "id", "name", "updatedAt" FROM "competitors";
DROP TABLE "competitors";
ALTER TABLE "new_competitors" RENAME TO "competitors";
CREATE UNIQUE INDEX "competitors_name_key" ON "competitors"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
