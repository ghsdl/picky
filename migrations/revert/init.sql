-- Revert picky:init from pg

BEGIN;

DROP TABLE "platform_has_member";

DROP TABLE "platform";

DROP TABLE "bookmark";

DROP TABLE "member";

DROP DOMAIN "url";

COMMIT;
