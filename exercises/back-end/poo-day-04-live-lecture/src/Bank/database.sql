CREATE DATABASE IF NOT EXISTS solid_example;

USE solid_example;

CREATE TABLE IF NOT EXISTS conta (
  id INT AUTO_INCREMENT,
  saldo DECIMAL(10, 2) NOT NULL,
  nome VARCHAR(100) NOT NULL,
  cpf VARCHAR(30) NOT NULL,
  tipo VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS pagamento_pix (
  id INT AUTO_INCREMENT,
  conta_origem_id INT NOT NULL,
  conta_destino_id INT NOT NULL,
  valor DECIMAL(10, 2) NOT NULL,
  chave_pix VARCHAR(255) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY pagamento_pix_conta_origem (conta_origem_id) REFERENCES conta (id),
  FOREIGN KEY pagamento_pix_conta_destino (conta_destino_id) REFERENCES conta (id)
);


INSERT INTO conta (id, saldo, nome, cpf, tipo) VALUES (1, 1000, "Usuário Teste", "111.111.111-11", "corrente")