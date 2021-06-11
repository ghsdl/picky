-- Deploy picky:deletecascade to pg

BEGIN;

ALTER TABLE "member_has_watchlist" DROP CONSTRAINT "member_has_watchlist_member_id_fkey";
ALTER TABLE "member_has_watchlist" ADD CONSTRAINT "member_has_watchlist_member_id_fkey" FOREIGN KEY (member_id) REFERENCES  "member"("id") ON DELETE CASCADE;

ALTER TABLE "member_has_watchlist" DROP CONSTRAINT "member_has_watchlist_watchlist_id_fkey";
ALTER TABLE "member_has_watchlist" ADD CONSTRAINT "member_has_watchlist_watchlist_id_fkey" FOREIGN KEY (watchlist_id) REFERENCES  "watchlist"("id") ON DELETE CASCADE;

ALTER TABLE "member_has_provider" DROP CONSTRAINT "member_has_provider_member_id_fkey";
ALTER TABLE "member_has_provider" ADD CONSTRAINT "member_has_provider_member_id_fkey" FOREIGN KEY (member_id) REFERENCES  "member"("id") ON DELETE CASCADE;

ALTER TABLE "member_has_provider" DROP CONSTRAINT "member_has_provider_provider_id_fkey";
ALTER TABLE "member_has_provider" ADD CONSTRAINT "member_has_provider_provider_id_fkey" FOREIGN KEY (provider_id) REFERENCES  "provider"("id") ON DELETE CASCADE;

COMMIT;
