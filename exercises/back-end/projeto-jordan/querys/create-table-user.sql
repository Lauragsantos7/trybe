CREATE TABLE IF NOT EXISTS jordan.users(
id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(45) NOT NULL,
 email VARCHAR(45) NOT NULL,
 password VARCHAR(45) NOT NULL,
 PRIMARY KEY(id)
)
ENGINE = InnoDB;