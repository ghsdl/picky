-- Revert picky:deletecascade from pg

BEGIN;

ALTER TABLE "platform_has_member" DROP CONSTRAINT "platform_has_member_member_id_fkey";
ALTER TABLE "platform_has_member" ADD CONSTRAINT "platform_has_member_member_id_fkey" FOREIGN KEY (member_id) REFERENCES  "member"("id");

ALTER TABLE "platform_has_member" DROP CONSTRAINT "platform_has_member_platform_id_fkey";
ALTER TABLE "platform_has_member" ADD CONSTRAINT "platform_has_member_platform_id_fkey" FOREIGN KEY (platform_id) REFERENCES  "platform"("id");

ALTER TABLE "bookmark" DROP CONSTRAINT "bookmark_member_id_fkey";
ALTER TABLE "bookmark" ADD CONSTRAINT "bookmark_member_id_fkey" FOREIGN KEY (member_id) REFERENCES  "member"("id");

COMMIT;
