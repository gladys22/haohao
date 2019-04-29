SET NAMES UTF8;
DROP DATABASE IF EXISTS haohao;
CREATE DATABASE haohao CHARSET=UTF8;
USE haohao;

/**用户信息**/
CREATE TABLE haohao_login(
	id INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd  VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(16),
	uid INT,


	avatar VARCHAR(128),          #头像图片路径
	user_name VARCHAR(32),        #用户名，如韩梅梅
	gender INT					  #性别 0-女 1-男
);



/**用户信息**/
INSERT INTO haohao_login VALUES
(NULL,'hanmeimei','123456','meimei@qq.com','13812345678',1,'img/avatar/default.png','韩梅梅','0'),
(NULL,'lilei','123456','leilei@qq.com','13812345679',2,'img/avatar/default.png','李雷','1');
