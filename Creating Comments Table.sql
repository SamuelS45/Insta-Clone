
USE instagram_clone;

CREATE TABLE `comments`(
`id` INT AUTO_INCREMENT NOT NULL,
`user_id` VARCHAR(50) NOT NULL,
`post_id` VARCHAR(50) NOT NULL,
`comment_text` VARCHAR(250) NOT NULL,
`created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
#`likes` INT NOT NULL,
PRIMARY KEY(`id`) 
) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



INSERT INTO `comments`(user_id,post_id,comment_text) VALUES('f06052a6-2252-11ee-8d22-089798700233','1','That piza looks dope bruv');
INSERT INTO `comments`(user_id,post_id,comment_text) VALUES('efda020f-2252-11ee-8d22-089798700233','1','Did you go to italy?');
INSERT INTO `comments`(user_id,post_id,comment_text) VALUES('f06052a6-2252-11ee-8d22-089798700233','2','How is Spain?');
INSERT INTO `comments`(user_id,post_id,comment_text) VALUES('20fd4fed-2229-11ee-8d22-089798700233','2','That Looks Beutiful');


#INSERT INTO `comments`()