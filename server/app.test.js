// const request = require("supertest");
// const app = require("./app");

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
//     name: "client",
//     email: "client@gmail.com",
//     password:"client"
//   });
//   expect(res.text).toBe("User Created Success");
// });
// test("Get All Client", async () => {
//   const res = await request(app).get("/auth/getAll");
//   expect(res.body.success).toBe(true);
// });

// test("Remove Client", async () => {
  //   const res = await request(app).delete(
  //     "/auth/delete/6433d6e10130ab195b6e768c"
  //   );
  //   expect(res.body.message).toBe("Car Deleted Success");
  // });
// });

// describe("Testing For EndPoint Car", () => {
  // test("Get All Cars", async () => {
  //   const res = await request(app).get("/car");
  //   expect(res.body.success).toBe(true);
  // });

  // test("Get One Car", async () => {
  //   const res = await request(app).get("/car/getOne/6433660122942b83f2ede9a7");
  //   expect(res.body.success).toBe(true);
  // });

  // test("Create Car", async () => {
  //   const res = await request(app).post("/organizme/add").send({
  //     name: "Car Test",
  //     model:"Test",
  //     price:100,
  //     description:"lorem",
  //     image:"ferrari-458.jpg"
  //   });
  //   expect(res.text).toBe("Car Created Success");
  // });

  // test("Update Car", async () => {
  //   const res = await request(app)
  //     .post("/car/update/6433d6e10130ab195b6e768c")
  //     .send({
  //       name: "Ferrari",
  //       model: "458",
  //       price: 3000,
  //       description: "Ferrari 458 ",
  //       image: "ferrari-458.jpg",
  //     });
  //   expect(res.body.message).toBe("Update Success");
  // });

  // test("Remove Car", async () => {
  //   const res = await request(app).delete(
  //     "/car/remove/6433d6e10130ab195b6e768c"
  //   );
  //   expect(res.body.message).toBe("Car Deleted Success");
  // });
// });
