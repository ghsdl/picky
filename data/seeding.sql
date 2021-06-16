INSERT INTO "member" ("pseudo", "email", "password", "profile_picture") VALUES 
('Dick Grayson', 'dick@dick.com', 'dick', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Titans_TV_cast_members.jpeg'),
('Kory Anders', 'kory@kory.com', 'kory', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Titans_TV_cast_members.jpeg'),
('Donna Troy', 'donna@donna.com', 'donna', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Titans_TV_cast_members.jpeg'),
('Rachel Roth', 'rachel@rachel.com', 'rachel', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Titans_TV_cast_members.jpeg'),
('Dawn Granger', 'dawn@dawn.com', 'dawn', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Titans_TV_cast_members.jpeg');

INSERT INTO "bookmark" ("betaseries_id", "title", "platform", "poster", "member_id") VALUES 
('17291', 'Titans', 'Netflix', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Titans_TV_cast_members.jpeg', 1),
('17291', 'Titans', 'Netflix', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Titans_TV_cast_members.jpeg', 2),
('17291', 'Titans', 'Netflix', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Titans_TV_cast_members.jpeg', 3),
('17291', 'Titans', 'Netflix', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Titans_TV_cast_members.jpeg', 4),
('17291', 'Titans', 'Netflix', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Titans_TV_cast_members.jpeg', 5);

INSERT INTO "platform" ("name", "logo") VALUES 
('Netflix', 'https:\/\/pictures.betaseries.com\/platforms\/1.jpg'), 
('Disney+', 'https:\/\/pictures.betaseries.com\/platforms\/246.jpg'), 
('Salto', 'https:\/\/pictures.betaseries.com\/platforms\/407.jpg'),
('OCS Go', 'https:\/\/pictures.betaseries.com\/platforms\/2.jpg'),
('Amazon Prime Video', 'https:\/\/pictures.betaseries.com\/platforms\/3.jpg');

INSERT INTO "platform_has_member" ("member_id", "platform_id")
VALUES (1,1);