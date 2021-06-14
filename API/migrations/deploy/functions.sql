-- Deploy picky:functions to pg

BEGIN;

CREATE FUNCTION add_member(member json) RETURNS "member" AS $$
WITH inserted_member AS (    
    INSERT INTO "member"
    ("pseudo", "email", "password", "profile_picture")
    VALUES(
        (member->>'pseudo'),
        (member->>'email'),
        (member->>'password'),
        (member->>'profile_picture')
    ) RETURNING *
), platform AS (
    INSERT INTO "platform_has_member"
    ("platform_id", "member_id")
    SELECT inserted_member.id, platform.id::text::int
    FROM inserted_member, json_array_elements(member->'platform_id') AS platform(id)
)
SELECT * FROM inserted_member;
$$ LANGUAGE sql;

CREATE FUNCTION update_member(member_input json) RETURNS "member" AS $$
    UPDATE "member" SET
    "pseudo" = member_input->>'pseudo',
    "email" = member_input->>'email',
    "password" = member_input->>'password', 
    "profile_picture" = member_input->>'profile_picture'
    WHERE "id" = (member_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION delete_member(id_input int) RETURNS void AS $$
    DELETE FROM "member" WHERE "id" = id_input;
$$ LANGUAGE sql;

CREATE FUNCTION add_bookmark(bookmark json) RETURNS "bookmark" AS $$
    INSERT INTO "bookmark"
    ("betaseries_id", "title", "platform", "poster", "member_id")
    VALUES(
        (bookmark->>'betaseries_id')::int,
        (bookmark->>'title'),
        (bookmark->>'platform'),
        (bookmark->>'poster'),
        (bookmark->>'member_id')::int
    ) RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION update_bookmark(bookmark_input json) RETURNS "bookmark" AS $$
    UPDATE "bookmark" SET
    "betaseries_id" = (bookmark_input->>'betaseries_id')::int,
    "title" = bookmark_input->>'title',
    "platform" = bookmark_input->>'platform',
    "poster" = bookmark_input->>'poster',
    "member_id" = (bookmark_input->>'member_id')::int
    WHERE "id" = (bookmark_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION delete_bookmark(id_input int) RETURNS void AS $$
    DELETE FROM "bookmark" WHERE "id" = id_input;
$$ LANGUAGE sql;

CREATE FUNCTION add_platform(platform json) RETURNS "platform" AS $$
WITH inserted_platform AS (
    INSERT INTO "platform"
    ("name", "logo")
    VALUES(
        (platform ->>'name'),
        (platform ->>'logo')
    ) RETURNING *
), member AS (
    INSERT INTO "platform_has_member"
    ("platform_id", "member_id")
    SELECT inserted_platform.id, member.id::text::int
    FROM inserted_platform, json_array_elements(platform->'member_id') AS member(id)
)
SELECT * FROM inserted_platform;
$$ LANGUAGE sql;

CREATE FUNCTION update_platform(platform_input json) RETURNS "platform" AS $$
    UPDATE "platform" SET
    "name" = platform_input->>'name', 
    "logo" = platform_input->>'logo'
    WHERE "id" = (platform_input->>'id')::int
    RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION delete_platform(id_input int) RETURNS void AS $$
    DELETE FROM "platform" WHERE "id" = id_input;
$$ LANGUAGE sql;

COMMIT;