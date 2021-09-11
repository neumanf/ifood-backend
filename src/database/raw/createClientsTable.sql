CREATE TABLE IF NOT EXISTS cliente (
    u_cpf VARCHAR(14),
    idade INT NOT NULL,
    FOREIGN KEY (u_cpf) REFERENCES usuario (cpf_cnpj)
);