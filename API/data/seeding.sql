INSERT INTO "member" ("pseudo", "email", "password", "profile_picture")
VALUES ('Diane Prince', 'diana@prince.com', 'diana', NULL);

INSERT INTO "watchlist" ("betaseries_id", "title", "provider", "poster")
VALUES ('1', 'Scrubs', 'Netflix', NULL);

INSERT INTO "provider" ("name", "logo")
VALUES ('Netflix', NULL);

INSERT INTO "member_has_watchlist" ("member_id", "watchlist_id")
VALUES (1,1);

INSERT INTO "member_has_provider" ("member_id", "provider_id")
VALUES (1,1);