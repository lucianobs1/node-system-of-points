-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rewards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "rewardedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" TEXT NOT NULL,
    "competitorId" TEXT NOT NULL,
    CONSTRAINT "rewards_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "rewards_competitorId_fkey" FOREIGN KEY ("competitorId") REFERENCES "competitors" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_rewards" ("categoryId", "competitorId", "description", "id", "rewardedAt") SELECT "categoryId", "competitorId", "description", "id", "rewardedAt" FROM "rewards";
DROP TABLE "rewards";
ALTER TABLE "new_rewards" RENAME TO "rewards";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
