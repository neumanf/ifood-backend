CREATE TABLE IF NOT EXISTS usuario (
    cpf_cnpj VARCHAR(14)  PRIMARY KEY,
    nome     VARCHAR(125) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    telefone VARCHAR(50),
    email    VARCHAR(255) UNIQUE NOT NULL,
    senha    VARCHAR(255) NOT NULL
);