-- Revert picky:deleting_constraint from pg

BEGIN;

ALTER TABLE "bookmark"
    ADD CONSTRAINT "betaseries_unique" UNIQUE ("betaseries_id");

COMMIT;
