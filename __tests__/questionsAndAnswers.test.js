const frisby = require("frisby");
const Joi = frisby.Joi;
const { getQuestions } = require("../server/models/questionsModels.js");

describe("practice test", () => {
  it("should get a list of questions from the database", async () => {
    const id = 1;
    const questionId = 5;

    let output;

    await getQuestions(id).then(data => {
      output = data.rows[0].id;
    });
    expect(output).toBe(questionId);
  });

  it("should return a status of 200 when sending a request for questions with the correct format for the questions", () => {
    return frisby
      .get("http://localhost:3000/qa/1/questions")
      .expect("status", 200)
      .expect("jsonTypes", "rows.*", {
        id: Joi.number(),
        question_body: Joi.string()
      });
  });
});

// it("should return an empty array when no questions are found", () => {});

// it("should return an array of photos", () => {});
