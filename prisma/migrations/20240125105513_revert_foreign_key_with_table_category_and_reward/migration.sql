/*
  Warnings:

  - You are about to drop the column `rewardId` on the `categories` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `rewards` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "money" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_categories" ("createdAt", "description", "id", "money", "points", "updatedAt") SELECT "createdAt", "description", "id", "money", "points", "updatedAt" FROM "categories";
DROP TABLE "categories";
ALTER TABLE "new_categories" RENAME TO "categories";
CREATE TABLE "new_rewards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "rewardedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" TEXT NOT NULL,
    "competitorId" TEXT NOT NULL,
    CONSTRAINT "rewards_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "rewards_competitorId_fkey" FOREIGN KEY ("competitorId") REFERENCES "competitors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_rewards" ("competitorId", "description", "id", "rewardedAt") SELECT "competitorId", "description", "id", "rewardedAt" FROM "rewards";
DROP TABLE "rewards";
ALTER TABLE "new_rewards" RENAME TO "rewards";
CREATE UNIQUE INDEX "rewards_categoryId_key" ON "rewards"("categoryId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
