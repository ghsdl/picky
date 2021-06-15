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
    "profile_picture" TEXT,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "bookmark" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "betaseries_id" INT NOT NULL,
    "title" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "poster" TEXT,
    "member_id" INT NOT NULL REFERENCES "member"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "platform" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "logo" TEXT
);

CREATE TABLE "platform_has_member" (
    "platform_id" INT NOT NULL REFERENCES "platform"("id"),
    "member_id" INT NOT NULL REFERENCES "member"("id"),
    "created_at" timestamptz NOT NULL DEFAULT now(),
    PRIMARY KEY ("member_id", "platform_id")
);

COMMIT;