-- write the database name that you use here
USE P5;

CREATE TABLE articles (
id int AUTO_INCREMENT NOT NULL,
title varchar(100),
description varchar(255),
author varchar(50),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);
INSERT INTO articles (title, description, author) VALUES ('John', 'John-Doe@gmail.com', 'Italy');