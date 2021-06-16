-- Verify picky:init on pg

BEGIN;

SELECT
    "id",
    "pseudo",
    "email",
    "password",
    "profile_picture"
FROM "member"
WHERE false;

SELECT 
    "id",
    "betaseries_id",
    "title",
    "platform",
    "poster",
    "member_id"
FROM "bookmark"
WHERE false;

SELECT
    "id",
    "name",
    "logo"
FROM "platform"
WHERE false;

ROLLBACK;
