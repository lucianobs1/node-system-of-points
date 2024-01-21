/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `competitors` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "competitors_name_key" ON "competitors"("name");
