-- write the database name that you use here
USE P5;

CREATE TABLE articles (
articles_id int AUTO_INCREMENT NOT NULL,
title varchar(100),
description varchar(255),
author varchar(50),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (articles_id)

);
CREATE TABLE users (
    user_id int AUTO_INCREMENT NOT NULL,
    email VARCHAR (100) NOT NULL,
    password VARCHAR (255) NOT NULL,
    name VARCHAR (100) NOT NULL,
    age int (100) NOT NULL,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (user_id)
);
