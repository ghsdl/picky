-- Revert picky:functions from pg

BEGIN;

DROP FUNCTION "add_member";

DROP FUNCTION "update_member";

DROP FUNCTION "delete_member";

DROP FUNCTION "add_bookmark";

DROP FUNCTION "update_bookmark";

DROP FUNCTION "delete_bookmark";

DROP FUNCTION "add_platform";

DROP FUNCTION "update_platform";

DROP FUNCTION "delete_platform";

COMMIT;
