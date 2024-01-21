-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_competitors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_competitors" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "competitors";
DROP TABLE "competitors";
ALTER TABLE "new_competitors" RENAME TO "competitors";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
