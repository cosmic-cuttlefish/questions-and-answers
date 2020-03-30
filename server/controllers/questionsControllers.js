const {
  getQuestions,
  addQuestion,
  updateQuestions
} = require("../models/questionsModels.js");

module.exports = {
  getQA: (req, res) => {
    getQuestions(req.params.id)
      .then(data => {
        if (data.rowCount === 0) {
          throw new Error("Invalid Question ID");
        }
        let questionList = { rowCount: data.rowCount, rows: data.rows };
        res.status(200).send(questionList);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ error: err.message });
      });
  },
  addQues: (req, res) => {
    addQuestion(req.params.product_id, req.body)
      .then(res.sendStatus(201))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  updateQues: (req, res) => {
    updateQuestions(req.params.question_id, req.url)
      .then(res.sendStatus(204))
      .catch(err => {
        res.sendStatus(500);
        console.log(err);
      });
  }
};
