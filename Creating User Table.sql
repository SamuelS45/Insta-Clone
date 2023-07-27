-- CREATE DATABASE instagram_clone

USE instagram_clone;

CREATE TABLE `user`(
	`user_id` INT AUTO_INCREMENT,
    `uuid` varchar(50) NOT NULL,
    `profile_img` VARCHAR(250) NOT NULL,
	`name` varchar(50) NOT NULL,
	`surname` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL,
	`password` varchar(50) NOT NULL,
    PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `user`(uuid, profile_img, name, surname , email, password) VALUES(uuid(),'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','James','Lovelace','jamieboy@gmail.com','12345');
INSERT INTO `user`(uuid, profile_img, name, surname , email, password) VALUES(uuid(),'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Philip','Ainu','AinuJam@gmail.com','12345');
INSERT INTO `user`(uuid, profile_img, name, surname , email, password) VALUES(uuid(),'https://images.pexels.com/photos/4045762/pexels-photo-4045762.jpeg?auto=compress&cs=tinysrgb&w=600','Jamie','Sim','JamSim@example.com','12345');
INSERT INTO `user`(uuid, profile_img, name, surname , email, password) VALUES(uuid(),'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600','Thadeus','Alan','Alan@example.com','12345');
INSERT INTO `user`(uuid, profile_img, name, surname , email, password) VALUES(uuid(),'https://images.pexels.com/photos/2253415/pexels-photo-2253415.jpeg?auto=compress&cs=tinysrgb&w=600','Isabel','Spainulu','SpanuluIsa@example.com','12345');
INSERT INTO `user`(uuid, profile_img, name, surname , email, password) VALUES(uuid(),'https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&w=600','Cran','Smith','smith@example.com','12345');

-- SELECT * FROM user



