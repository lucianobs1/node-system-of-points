-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_competitors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "avatar" TEXT,
    "score" INTEGER NOT NULL DEFAULT 0,
    "money" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_competitors" ("avatar", "createdAt", "id", "name", "score", "surname", "updatedAt") SELECT "avatar", "createdAt", "id", "name", "score", "surname", "updatedAt" FROM "competitors";
DROP TABLE "competitors";
ALTER TABLE "new_competitors" RENAME TO "competitors";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
