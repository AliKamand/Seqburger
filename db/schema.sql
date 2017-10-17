DROP DATABASE IF EXISTS `burgers`;
CREATE DATABASE `burgers`;

USE burgers;

CREATE TABLE burgers (
	ID int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured VARCHAR(20),
    date DATE,
		createdAt DATE,
		updatedAt DATE,
    PRIMARY KEY (ID)
);
