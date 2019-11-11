const db = require("../../db/Postgres/index.js");

module.exports = {
  getQuestions: id => {
    return db
      .query(
        `SELECT Q.id, Q.product_id, Q.question_body, Q.question_date,Q.asker_name,Q.question_helpfulness, (SELECT json_object_agg(answer_id, row_to_json(d)) as answers from ( SELECT A.id as answer_id,A.answer_body,A.answer_date,A.answerer_name,A.answer_helpfulness, (SELECT ARRAY( SELECT P.photo_url FROM Photos P WHERE P.id_Answers = A.id) as photos) FROM Answers A WHERE Q.id = A.id_question) d) FROM Question Q WHERE Q.product_id = ${id} AND Q.question_reported <> 1;`
      )
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  addQuestion: (productId, newQuestion) => {
    return db
      .query(
        `INSERT INTO Question (product_id, question_body, asker_name, asker_email) VALUES ($1,$2,$3,$4)`,
        [productId, newQuestion.body, newQuestion.name, newQuestion.email]
      )
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  updateQuestions: (questionId, url) => {
    if (url.includes("helpful")) {
      url = "helpfulness";
    } else if (url.includes("report")) {
      url = "reported";
    }
    return db
      .query(
        `UPDATE QUESTION SET question_${url} = question_${url} + 1 WHERE id = ${questionId};`
      )
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};
