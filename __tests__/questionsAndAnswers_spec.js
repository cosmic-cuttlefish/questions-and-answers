const frisby = require("frisby");
const Joi = frisby.Joi;
const app = require("express")();
const routes = require("../server/routes/qandaRoutes.js");
const { getQuestions } = require("../server/models/questionsModels.js");
let server;
beforeEach(done => {
  server = app.listen(4000, err => {
    if (err) return done(err); // since the application is already listening, it should use the allocated port
    done();
  });
  app.use("/qa", routes);
});

afterEach(done => {
  return server.close(done);
});

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
      .get("http://localhost:4000/qa/1/questions")
      .expect("status", 200)
      .expect("jsonTypes", "rows.*", {
        id: Joi.number(),
        question_body: Joi.string()
      });
  });
});
