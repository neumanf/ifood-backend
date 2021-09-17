CREATE TABLE IF NOT EXISTS contem (
    p_id BIGINT,
    i_id BIGINT UNIQUE,
    FOREIGN KEY (p_id) REFERENCES pedidos (id),
    FOREIGN KEY (i_id) REFERENCES item (id)
);