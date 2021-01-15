-- DROP AND CREATE burgers_db
DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

-- CREATE TABLES WITHIN DATABASE
USE burgers_db;


-- CREATE BURGERS TABLE
CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(40) NOT NULL,
    devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);


-- SEEDS FOR DATABASE
INSERT INTO burgers (burger_name, devoured)
VALUES ("Bacon Cheeseburger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Cheeseburger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Veggie Burger", false);