const frisby = require("frisby");
const Joi = frisby.Joi;

it("should return a status of 200 when sending a request for questions", () => {
  return frisby
    .get("http://localhost:3000/qa/1/questions")
    .expect("status", 200)
    .expect("jsonTypes", "rows.*", {
      id: Joi.number()
    });
});

// it("should return an empty array when no questions are found", () => {});

// it("should return an array of photos", () => {});
