/*
  Warnings:

  - You are about to drop the column `parentID` on the `Student` table. All the data in the column will be lost.
  - Added the required column `birthday` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Class" DROP CONSTRAINT "Class_supervisorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Student" DROP CONSTRAINT "Student_parentID_fkey";

-- DropIndex
DROP INDEX "public"."Lesson_name_key";

-- AlterTable
ALTER TABLE "public"."Class" ALTER COLUMN "supervisorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Student" DROP COLUMN "parentID",
ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "parentId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Teacher" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Student" ADD CONSTRAINT "Student_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Class" ADD CONSTRAINT "Class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "public"."Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
