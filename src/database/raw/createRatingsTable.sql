CREATE TABLE IF NOT EXISTS avalia (
    c_cpf VARCHAR(14) NOT NULL,
    e_cnpj VARCHAR(14) NOT NULL,
    nota INT NOT NULL,
    FOREIGN KEY (c_cpf) REFERENCES cliente (u_cpf),
    FOREIGN KEY (e_cnpj) REFERENCES estabelecimento (u_cnpj)
);