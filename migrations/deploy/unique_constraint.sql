-- Deploy picky:unique_constraint to pg

BEGIN;

ALTER TABLE "bookmark"
    ADD CONSTRAINT "betaseries_unique" UNIQUE ("betaseries_id");

COMMIT;
