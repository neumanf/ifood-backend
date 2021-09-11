CREATE TABLE IF NOT EXISTS estabelecimento (
    u_cnpj VARCHAR(14),
    tipo   VARCHAR(255) NOT NULL,
    FOREIGN KEY (u_cnpj) REFERENCES usuario (cpf_cnpj)
);