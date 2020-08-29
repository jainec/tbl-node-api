const request = require("supertest");
const app = require("../app");
const User = require("../app/models/User");

beforeEach(async () => {
  await User.destroy({
    where: {},
    truncate: { cascade: true },
  });
});

test("Should create a user", async () => {
  const response = await request(app).post("/users").send({
    name: "Jaine",
    email: "jayne-conceicao@hotmail.com",
    password: "password",
    profile_id: "1",
  });

  const user = await User.findOne({ name: "Jaine" });
  expect(response.status).toBe(201);
  expect(user).not.toBeNull();
  expect(response.body).toMatchObject({
    id: user.id,
    name: user.name,
    email: user.email,
  });
});
