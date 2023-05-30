SET NAMES utf8mb4;
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';
DROP SCHEMA IF EXISTS bank;
CREATE SCHEMA bank;
USE bank;
​
CREATE TABLE account_types (
  id INT PRIMARY KEY AUTO_INCREMENT,
  type VARCHAR(10) NOT NULL
);
​
INSERT INTO account_types(type) VALUES('corrente'),('poupança'),('salario');
​
CREATE TABLE accounts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  active BOOLEAN NOT NULL DEFAULT true,
  amount INT NOT NULL DEFAULT 0,
  type INT NOT NULL,
  FOREIGN KEY (type) REFERENCES account_types (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
-- Populando a tabela account com 20 nomes aleatórios de pessoas
CREATE TABLE transactions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  from_account INT NOT NULL,
  to_account INT NOT NULL,
  amount INT NOT NULL,
  transaction_date DATETIME NOT NULL DEFAULT now(),
  FOREIGN KEY (from_account) REFERENCES accounts (id),
  FOREIGN KEY (to_account) REFERENCES accounts (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
​
INSERT INTO accounts (name, email, active, amount, type) VALUES
  ('Victor Lopes', 'victor.lopes@example.com', true, 1000, 1),
  ('Matheus Santos', 'matheus.santos@example.com', true, 2000, 2),
  ('Juliana Pereira', 'juliana.pereira@example.com', true, 1500, 1),
  ('Leonardo Silva', 'leonardo.silva@example.com', true, 800, 3),
  ('Aline Rodrigues', 'aline.rodrigues@example.com', true, 500, 1),
  ('Gabriela Oliveira', 'gabriela.oliveira@example.com', true, 1200, 2),
  ('Lucas Alves', 'lucas.alves@example.com', true, 3000, 1),
  ('Felipe Souza', 'felipe.souza@example.com', false, 0, 1),
  ('Camila Costa', 'camila.costa@example.com', true, 1700, 1),
  ('Renato Cardoso', 'renato.cardoso@example.com', true, 900, 1),
  ('Bianca Santos', 'bianca.santos@example.com', true, 2500, 2),
  ('Rafaela Lima', 'rafaela.lima@example.com', true, 1300, 1),
  ('Henrique Ferreira', 'henrique.ferreira@example.com', true, 1100, 1),
  ('Mariana Vieira', 'mariana.vieira@example.com', true, 700, 2),
  ('Daniel Ribeiro', 'daniel.ribeiro@example.com', true, 1800, 1),
  ('Gustavo Carvalho', 'gustavo.carvalho@example.com', true, 2200, 1),
  ('Isabela Martins', 'isabela.martins@example.com', true, 100, 1),
  ('Paulo Pereira', 'paulo.pereira@example.com', true, 400, 2),
  ('Xablau da Silva', 'xablau.da.silva@example.com', true, 5000, 1),
  ('Larissa Costa', 'larissa.costa@example.com', true, 1900, 1),
  ('Leandro Nascimento', 'leandro.nascimento@example.com', false, 0, 1),
  ('Pedro Lorenzo', 'pedro.lorenzo@example.com', false, 0, 2),
  ('Amanda Joha', 'amanda.joha@example.com', true, 1400, 3);
​
INSERT INTO transactions (from_account, to_account, amount, transaction_date) VALUES
  (1, 2, 500, now()),
  (3, 1, 200, now()),
  (2, 3, 1000, now()),
  (4, 2, 300, now()),
  (5, 1, 150, now()),
  (6, 4, 800, now()),
  (7, 5, 2000, now()),
  (8, 1, 500, now()),
  (9, 2, 250, now()),
  (10, 5, 100, now()),
  (1, 7, 300, now()),
  (3, 8, 700, now()),
  (2, 9, 900, now()),
  (4, 10, 1200, now());