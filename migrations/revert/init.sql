-- Revert picky:init from pg

BEGIN;

DROP TABLE "member_has_provider";

DROP TABLE "member_has_watchlist";

DROP TABLE "provider";

DROP TABLE "watchlist";

DROP TABLE "member";

DROP DOMAIN "url";

COMMIT;
