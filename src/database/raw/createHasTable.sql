CREATE TABLE IF NOT EXISTS possui (
    e_cnpj VARCHAR(14) UNIQUE,
    i_id BIGINT,
    quantidade INT,
    FOREIGN KEY (e_cnpj) REFERENCES estabelecimento (u_cnpj),
    FOREIGN KEY (i_id) REFERENCES item (id)
);