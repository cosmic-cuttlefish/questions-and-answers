const db = require("../../db/Postgres/index.js");

module.exports = {
  getAnswer: id => {
    return db
      .query(
        `SELECT A.id as answer_id,A.answer_body,A.answer_date,A.answerer_name,A.answer_helpfulness, (SELECT ARRAY( SELECT P.photo_url FROM Photos P WHERE P.id_Answers = A.id) as photos) FROM Answers A WHERE A.id_Question = ${id} AND A.answer_reported <> 1;`
      )
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  addAnswer: (questionId, newAnswer) => {
    return db
      .query(
        `INSERT INTO Answers (answer_body, answerer_name, answerer_email, id_Question) VALUES ($1,$2,$3,$4) RETURNING id`,
        [newAnswer.body, newAnswer.name, newAnswer.email, questionId]
      )
      .then(({ rows }) => {
        let newAnswerId = rows[0].id;
        newAnswer.photos.forEach(url => {
          return db.query(
            `INSERT INTO Photos (photo_url, id_answers) VALUES ('${url}',${newAnswerId})`
          );
        });
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  updateAnswer: (answerId, url) => {
    if (url.includes("helpful")) {
      url = "helpfulness";
    } else if (url.includes("report")) {
      url = "reported";
    }
    return db
      .query(
        `UPDATE Answers SET answer_${url} = answer_${url} + 1 WHERE id = ${answerId};`
      )
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};
