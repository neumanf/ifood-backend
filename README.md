# IFood Backend

## Requerimentos

-   mariadb
-   node
-   npm

## Rotas

### Usuários

#### · POST /users

**Descrição:** Cria um usuário

**Request**

```json
{
    "cpf_cnpj": "12312312312",
    "nome": "Joana",
    "endereco": "Rua Teste, n 22, Centro",
    "telefone": "(84)9999-9999",
    "email": "joana1@gmail.com",
    "senha": "joana123",
    "idade": 22
}
```

**Response**

```json
{
    "ok": true
}
```

---

#### · GET /users

**Descrição:** Recebe todos os usuários

**Request**

> GET /users

**Response**

```json
[
    {
        "cpf_cnpj": "12312312312",
        "nome": "Joana",
        "endereco": "Rua Teste, n 22, Centro",
        "telefone": "(84)9999-9999",
        "email": "joana1@gmail.com",
        "senha": "joana123",
        "idade": 22
    },
    {
        "cpf_cnpj": "11111111111111",
        "nome": "Restaurante 1",
        "endereco": "Rua Teste 2, n 3, Centro",
        "telefone": "(84)2222-2222",
        "email": "restaurante287813@gmail.com",
        "senha": "restaurante123123",
        "tipo": "restaurante"
    }
]
```

---

#### · GET /users/:userId

**Descrição:** Recebe um usuário

**Request**

> GET /users/12312312312

**Response**

```json
{
    "cpf_cnpj": "12312312312",
    "nome": "Joana",
    "endereco": "Rua Teste, n 22, Centro",
    "telefone": "(84)9999-9999",
    "email": "joana1@gmail.com",
    "senha": "joana123",
    "idade": 22
}
```

---

#### · DELETE /users/:userId

**Descrição:** Deleta um usuário

**Request**

> DELETE /users/12312312312

**Response**

```json
{
    "ok": true
}
```

### Pedidos

#### · POST /users/:userId/orders

**Descrição:** Cria um pedido

**Request**

> POST /users/12312312312/orders

```json
{
    "estado": "finalizado",
    "nota": 7,
    "comentario": "bom",
    "form_pagamento": "picpay",
    "e_cnpj": "00000000000000"
}
```

**Response**

```json
{
    "ok": true
}
```

---

#### · GET /users/:userId/orders

**Descrição:** Recebe todos os pedidos

**Request**

> GET /users/12312312312/orders

**Response**

```json
[
    {
        "id": 1,
        "estado": "finalizado",
        "c_cpf": "12312312312",
        "nota": 7,
        "comentario": "bom",
        "form_pagamento": "picpay",
        "e_cnpj": "00000000000000"
    },
    {
        "id": 2,
        "estado": "finalizado",
        "c_cpf": "12312312312",
        "nota": 9,
        "comentario": "ótimo",
        "form_pagamento": "cartao_de_credito",
        "e_cnpj": "00000000000000"
    }
]
```

---

#### · GET /users/:userId/orders/:orderId

**Descrição:** Recebe um pedido

**Request**

> GET /users/12312312312/orders/1

**Response**

```json
{
    "id": 1,
    "estado": "finalizado",
    "c_cpf": "12312312312",
    "nota": 7,
    "comentario": "bom",
    "form_pagamento": "picpay",
    "e_cnpj": "00000000000000"
}
```

### Itens

#### · POST /users/:userId/orders/:orderId/items

**Descrição:** Cria um item

**Request**

> POST /users/12312312312/orders/1/items

```json
{
    "categoria": "bedida",
    "nome": "coca cola",
    "preco": 5,
    "e_cnpj": "00000000000000",
    "quantidade": 1
}
```

**Response**

```json
{
    "ok": true
}
```

---

#### · GET /users/:userId/orders/:orderId/items

**Descrição:** Recebe todos os itens

**Request**

> GET /users/12312312312/orders/1/items

**Response**

```json
[
    {
        "id": 1,
        "categoria": "bebida",
        "nome": "coca cola",
        "preco": 5
    },
    {
        "id": 2,
        "categoria": "comida japonesa",
        "nome": "sushi",
        "preco": 20
    }
]
```

---

#### · GET /users/:userId/orders/:orderId/items/:itemId

**Descrição:** Recebe um item

**Request**

> GET /users/12312312312/orders/1/items/1

**Response**

```json
{
    "id": 1,
    "categoria": "bebida",
    "nome": "coca cola",
    "preco": 5
}
```

### Avalia

#### · POST /users/:userId/ratings

**Descrição:** Cria uma avaliação

**Request**

> POST /users/12312312312/ratings

```json
{
    "e_cnpj": "00000000000000",
    "nota": 5
}
```

**Response**

```json
{
    "ok": true
}
```

---

#### · GET /users/:userId/ratings

**Descrição:** Recebe todas as avaliações

**Request**

> GET /users/12312312312/ratings

**Response**

```json
[
    {
        "c_cpf": "12312312312",
        "e_cnpj": "00000000000000",
        "nota": 5
    },
    {
        "c_cpf": "12312312312",
        "e_cnpj": "99999999999999",
        "nota": 3
    }
]
```

### Métodos de pagamento

#### · POST /users/:userId/payment-methods

**Descrição:** Cria um método de pagamento

**Request**

> POST /users/12312312312/payment-methods

```json
{
    "picpay": "32313213",
    "cartao_de_credito": "3928281787272"
}
```

**Response**

```json
{
    "ok": true
}
```

---

#### · GET /users/:userId/payment-methods

**Descrição:** Recebe todos os métodos de pagamento

**Request**

> GET /users/12312312312/payment-methods

**Response**

```json
{
    "c_cpf": "12312312312",
    "picpay": "32313213",
    "cartao_de_credito": "3928281787272"
}
```

---

#### · DELETE /users/:userId/payment-methods

**Descrição:** Recebe um método de pagamento

**Request**

> DELETE /users/12312312312/payment-methods

**Response**

```json
{
    "ok": true
}
```

## Desenvolvimento

```bash
# Clone o repositório
$ git clone https://github.com/neumanf/ifood-backend # ou seu fork

# Navegue até o diretório
$ cd ifood-backend

# Instale as dependencias
$ npm install

# Copie o arquivo .env.example para .env
$ cp .env.example .env

# Inicie o servidor
$ npm run dev
```

## Contribuindo

Leia [CONTRIBUTING.md](CONTRIBUTING.md)
