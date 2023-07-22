-- CREATE DATABASE instagram_clone

USE instagram_clone;

CREATE TABLE `user`(
	`user_id` INT AUTO_INCREMENT,
    `uuid` varchar(50) NOT NULL,
	`name` varchar(50) NOT NULL,
	`surname` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL,
	`password` varchar(50) NOT NULL,
    PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `user`(uuid, name, surname , email, password) VALUES(uuid(),'James','Lovelace','jamieboy@gmail.com','12345');
INSERT INTO `user`(uuid, name, surname , email, password) VALUES(uuid(),'Philip','Ainu','AinuJam@gmail.com','12345');
INSERT INTO `user`(uuid, name, surname , email, password) VALUES(uuid(),'Jamie','Sim','JamSim@example.com','12345');
INSERT INTO `user`(uuid, name, surname , email, password) VALUES(uuid(),'Thadeus','Alan','Alan@example.com','12345');
INSERT INTO `user`(uuid, name, surname , email, password) VALUES(uuid(),'Isabel','Spainulu','SpanuluIsa@example.com','12345');
INSERT INTO `user`(uuid, name, surname , email, password) VALUES(uuid(),'Cran','Smith','smith@example.com','12345');

-- SELECT * FROM user



