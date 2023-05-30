CREATE DATABASE IF NOT EXISTS books_api;

USE books_api;

CREATE TABLE IF NOT EXISTS books
(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  price DECIMAL(10, 2),
  author VARCHAR(100) NOT NULL,
  isbn VARCHAR(100),
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS users
(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  password INT NOT NULL
);

INSERT INTO users (username, password)
VALUES ('joao@mail.com', 123456), ('maria@mail', 1234567),
  ('mail@mail.com', 1298765);