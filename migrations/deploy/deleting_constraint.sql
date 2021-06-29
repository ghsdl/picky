-- Deploy picky:deleting_constraint to pg

BEGIN;

ALTER TABLE "bookmark"
    DROP CONSTRAINT "betaseries_unique";

COMMIT;
