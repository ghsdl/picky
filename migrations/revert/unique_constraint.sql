-- Revert picky:unique_constraint from pg

BEGIN;

ALTER TABLE "bookmark"
    DROP CONSTRAINT "betaseries_unique";

COMMIT;
