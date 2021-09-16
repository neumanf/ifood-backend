CREATE TABLE IF NOT EXISTS contem (
    p_id BIGINT UNIQUE,
    i_id BIGINT,
    FOREIGN KEY (p_id) REFERENCES pedidos (id),
    FOREIGN KEY (i_id) REFERENCES item (id)
);