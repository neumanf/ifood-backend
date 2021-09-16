CREATE TABLE IF NOT EXISTS pedidos (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    estado VARCHAR(50) NOT NULL,
    c_cpf VARCHAR(14) NOT NULL,
    nota INT CHECK (nota >= 0 AND nota <= 10),
    comentario VARCHAR(255),
    form_pagamento VARCHAR(17) NOT NULL CHECK (form_pagamento='picpay' OR form_pagamento='cartão de credito'),
    e_cnpj VARCHAR(14),
    FOREIGN KEY (c_cpf) REFERENCES cliente (u_cpf),
    FOREIGN KEY (e_cnpj) REFERENCES estabelecimento (u_cnpj)
);
