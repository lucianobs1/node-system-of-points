-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "money" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);

-- CreateTable
CREATE TABLE "rewards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "competitorId" TEXT NOT NULL,
    "rewardedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "rewards_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "rewards_competitorId_fkey" FOREIGN KEY ("competitorId") REFERENCES "competitors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_competitors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "avatar" TEXT,
    "score" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_competitors" ("avatar", "createdAt", "id", "name", "surname", "updatedAt") SELECT "avatar", "createdAt", "id", "name", "surname", "updatedAt" FROM "competitors";
DROP TABLE "competitors";
ALTER TABLE "new_competitors" RENAME TO "competitors";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "rewards_categoryId_key" ON "rewards"("categoryId");
