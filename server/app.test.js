const request = require("supertest");
const app = require("./app");

// describe("Testing For EndPoint Authentication", () => {
  // test("Login", async () => {
  //   const res = await request(app).post("/auth/login").send({
  //     email: "admin@gmail.com",
  //     password: "admin",
  //   });
  //   expect(res.body.message).toBe("Login Success");
  // });
  // test("Register", async () => {
  //   const res = await request(app).post("/auth/register").send({
  //     name: "root2",
  //     email: "root2@gmail.com",
  //     password:"root2"
  //   });
  //   expect(res.text).toBe("User Created Success");
  // });
  // test("Get All Client", async () => {
  //   const res = await request(app).get("/auth/getAll");
  //   expect(res.body.success).toBe(true);
  // });
// });

describe("Testing For EndPoint Car", () => {
//   test("Created Organizme", async () => {
//     const res = await request(app).post("/organizme/add").send({
//       name: "Test",
//     });
//     expect(res.text).toBe("Organizme Created Success");
//   });
  test("Get All Cars", async () => {
    const res = await request(app).get("/car");
    expect(res.body.success).toBe(true);
  });
//   test("Get One Organizme", async () => {
//     const res = await request(app).get("/organizme/63bf0958d8b2967de9da898d");
//     expect(res.body.success).toBe(true);
//   });
//   test("Remove One Organizme", async () => {
//     const res = await request(app).delete(
//       "/organizme/remove/63c55ad5e9bb038860c8fda1"
//     );
//     expect(res.body.message).toBe("Organizme Deleted Success");
//   });
//   test("Update One Organizme", async () => {
//     const res = await request(app)
//       .post("/organizme/update/63bf09e9e4e3054853741739")
//       .send({
//         name: "1337",
//       });
//     expect(res.body.message).toBe("Update Success");
//   });
});