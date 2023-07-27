
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



INSERT INTO `comments`(user_id,post_id,comment_text) VALUES('4','1','That piza looks dope bruv');
INSERT INTO `comments`(user_id,post_id,comment_text) VALUES('3','1','Did you go to italy?');
INSERT INTO `comments`(user_id,post_id,comment_text) VALUES('2','1','I wanna go');
INSERT INTO `comments`(user_id,post_id,comment_text) VALUES('6','1','Wow');
INSERT INTO `comments`(user_id,post_id,comment_text) VALUES('5','1','Nice pepronni');
INSERT INTO `comments`(user_id,post_id,comment_text) VALUES('1','1','Yep');
INSERT INTO `comments`(user_id,post_id,comment_text) VALUES('1','1','I miss pizzaaa');
INSERT INTO `comments`(user_id,post_id,comment_text) VALUES('4','2','How is Spain?');
INSERT INTO `comments`(user_id,post_id,comment_text) VALUES('3','2','That Looks Beutiful');


#INSERT INTO `comments`()