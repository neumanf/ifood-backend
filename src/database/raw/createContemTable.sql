CREATE TABLE IF NOT EXISTS contem (
    p_id BIGINT NOT NULL,
    i_id BIGINT NOT NULL,
    FOREIGN KEY (p_id) REFERENCES pedidos (id),
    FOREIGN KEY (i_id) REFERENCES item (id)
);