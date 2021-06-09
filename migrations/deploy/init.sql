-- Deploy picky:init to pg

BEGIN;

CREATE DOMAIN url AS text 
CHECK (VALUE ~ 'https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,255}\.[a-z]{2,9}\y([-a-zA-Z0-9@:%_\+.,~#?!&>//=]*)$');
COMMENT ON DOMAIN url IS 'match URLs (http or https)';

CREATE TABLE "member" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "pseudo" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL, 
    "profile_picture" URL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "watchlist" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "betaseries_id" INT NOT NULL,
    "title" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "poster" URL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "provider" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "logo" URL
);

CREATE TABLE "member_has_watchlist" (
    "member_id" INT NOT NULL REFERENCES "member"("id"),
    "watchlist_id" INT NOT NULL REFERENCES "watchlist"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY ("member_id", "watchlist_id")
);

CREATE TABLE "member_has_provider" (
    "member_id" INT NOT NULL REFERENCES "member"("id"),
    "provider_id" INT NOT NULL REFERENCES "provider"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY ("member_id", "provider_id")
);

COMMIT;