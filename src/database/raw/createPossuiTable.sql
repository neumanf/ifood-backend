CREATE TABLE IF NOT EXISTS possui (
    e_cnpj VARCHAR(14) UNIQUE,
    i_id BIGINT NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (e_cnpj) REFERENCES estabelecimento (u_cnpj),
    FOREIGN KEY (i_id) REFERENCES item (id)
);