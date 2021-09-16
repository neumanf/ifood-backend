CREATE TABLE IF NOT EXISTS forma_de_pagamento (
    c_cpf VARCHAR(14) UNIQUE,
    picpay VARCHAR(255) NOT NULL,
    cartao_de_credito VARCHAR(16) NOT NULL,
    FOREIGN KEY (c_cpf) REFERENCES cliente (u_cpf)
);