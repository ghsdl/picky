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
    "provider",
    "poster"
FROM "watchlist"
WHERE false;

SELECT
    "id",
    "name",
    "logo"
FROM "provider"
WHERE false;

ROLLBACK;
