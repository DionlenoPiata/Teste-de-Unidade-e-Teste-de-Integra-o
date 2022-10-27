const server = require("../src/index");
const request = require("supertest");
const mongoose = require("mongoose");

describe("Users tests", () => {
  /*
   const MOONGO_URL = "url banco de dados";
   breforeAll(async () => {
    await mongoose.connect(
      MOONGO_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, db) => {}
    );
  });

  afterAll(async () => {
    await mongoose.connection.db.dropCollection("User");
  });*/

  it("should create a user", async () => {
    const response = await request(server).post("/create").send({
      name: "name test",
      email: "email@test.com",
      password: "123",
    });

    expect(response.status).toBe(200);
    expect(response.body.user.name).toBe("name test");
  });

  it("should create a user", async () => {
    const response = await request(server).post("/create").send({
      name: "name test2",
      email: "email2@test.com",
    });

    expect(response.status).toBe(200);
    expect(response.body.user.name).toBe("name test2");
  });
});
