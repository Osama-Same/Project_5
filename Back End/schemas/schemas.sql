-- write the database name that you use here
USE P5;

CREATE TABLE articles (
id int AUTO_INCREMENT NOT NULL,
title varchar(100),
img_url VARCHAR (255),
description varchar(255),
author varchar(50),
fav varchar(50),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);
CREATE TABLE users (
    id int AUTO_INCREMENT NOT NULL,
    email VARCHAR (100) NOT NULL,
    password VARCHAR (255) NOT NULL,
    name VARCHAR (100) NOT NULL,
    age int (100) NOT NULL,
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);




