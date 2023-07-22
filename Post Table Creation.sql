

USE instagram_clone;

CREATE TABLE `post`(
	`user_uuid` VARCHAR(50) NOT NULL,
    `profile_img` VARCHAR(250),
    `user_name` VARCHAR(250),
	`id` INT AUTO_INCREMENT,
    `caption` VARCHAR(250) NOT NULL,
    `url` VARCHAR(250) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `likes` INT NOT NULL,
    `num_comments` INT NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE =InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



INSERT INTO `post`(user_uuid,user_name,profile_img,caption,url,likes,num_comments) VALUES('4b1b0115-1bd4-11ee-9230-089798700233','James','https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','I Love Pizza','https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',16,6);
INSERT INTO `post`(user_uuid,user_name,profile_img,caption,url,likes,num_comments) VALUES('4b1b0115-1bd4-11ee-9230-089798700233','James','https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','I Love Spain','https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1600',12,2);
INSERT INTO `post`(user_uuid,user_name,profile_img,caption,url,likes,num_comments) VALUES('20fd4fed-2229-11ee-8d22-089798700233','Philip','https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Deep Sea','https://images.pexels.com/photos/1452701/pexels-photo-1452701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',23,12);
INSERT INTO `post`(user_uuid,user_name,profile_img,caption,url,likes,num_comments) VALUES('20fd4fed-2229-11ee-8d22-089798700233','Philip','https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','Fishing','https://images.pexels.com/photos/6831129/pexels-photo-6831129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',43,24)