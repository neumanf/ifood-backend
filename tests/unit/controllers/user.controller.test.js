const request = require("supertest");

const app = require("../../../src/app");
const pool = require("../../../src/database/connection");

describe("User controller", () => {
    const newClient = {
        cpf_cnpj: "12312312312",
        nome: "Joana",
        endereco: "Rua Teste, n 22, Centro",
        telefone: "(84)9999-9999",
        email: "joana1@gmail.com",
        senha: "joana123",
        idade: 22,
    };

    const newClientWithoutIdade = {
        cpf_cnpj: "92346289182",
        nome: "Marcos",
        endereco: "Rua Teste, n 22, Centro",
        telefone: "(84)9999-9999",
        email: "marcos1@gmail.com",
        senha: "marcos123",
    };

    const newEstablishment = {
        cpf_cnpj: "11111111111111",
        nome: "Restaurante 1",
        endereco: "Rua Teste 2, n 3, Centro",
        telefone: "(84)2222-2222",
        email: "restaurante287813@gmail.com",
        senha: "restaurante123123",
        tipo: "restaurante",
    };

    it("should create an user/client and return status code 200", async () => {
        const res = await request(app).post("/users").send(newClient);

        expect(res.statusCode).toEqual(200);
        expect(res.body.ok).toEqual(true);
    });

    it("should create an user/establishment and return status code 200", async () => {
        const res = await request(app).post("/users").send(newEstablishment);

        expect(res.statusCode).toEqual(200);
        expect(res.body.ok).toEqual(true);
    });

    it("should return an client and status code 200", async () => {
        const res = await request(app).get(`/users/${newClient.cpf_cnpj}`);
        const user = res.body;

        expect(res.statusCode).toEqual(200);
        expect(user.cpf_cnpj).toEqual(newClient.cpf_cnpj);
        expect(user.nome).toEqual(newClient.nome);
        expect(user.endereco).toEqual(newClient.endereco);
        expect(user.telefone).toEqual(newClient.telefone);
        expect(user.email).toEqual(newClient.email);
        expect(user.idade).toEqual(newClient.idade);
        expect(user.tipo).toEqual(null);
    });

    it("should return an establishment and status code 200", async () => {
        const res = await request(app).get(`/users/${newEstablishment.cpf_cnpj}`);
        const user = res.body;

        expect(res.statusCode).toEqual(200);
        expect(user.cpf_cnpj).toEqual(newEstablishment.cpf_cnpj);
        expect(user.nome).toEqual(newEstablishment.nome);
        expect(user.endereco).toEqual(newEstablishment.endereco);
        expect(user.telefone).toEqual(newEstablishment.telefone);
        expect(user.email).toEqual(newEstablishment.email);
        expect(user.tipo).toEqual(newEstablishment.tipo);
        expect(user.idade).toEqual(null);
    });

    it("should return all users and status code 200", async () => {
        const res = await request(app).get("/users");

        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeDefined();
    });

    it("should delete an user/client and return status code 200", async () => {
        const res = await request(app).delete(`/users/${newClient.cpf_cnpj}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.ok).toEqual(true);
    });

    it("should delete an user/establishment and return status code 200", async () => {
        const res = await request(app).delete(`/users/${newEstablishment.cpf_cnpj}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.ok).toEqual(true);
    });

    it("should try to create a user without the required atributes and return a 400 error", async () => {
        const res = await request(app).post(`/users`).send(newClientWithoutIdade);

        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toBeDefined();
    });

    it("should search for a nonexistent user and return a 404 error", async () => {
        const res = await request(app).get(`/users/${newClient}`);

        expect(res.statusCode).toEqual(404);
        expect(res.body.error).toEqual("Usuário não encontrado.");
    });
});

afterAll(async () => {
    await pool.end();
});
