const {
  getQuestions,
  addQuestion,
  updateQuestions
} = require("../models/questionsModels.js");

module.exports = {
  getQA: (req, res) => {
    getQuestions(req.params.id)
      .then(data => {
        let questionList = { rowCount: data.rowCount, rows: data.rows };
        res.send(questionList).status(200);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log(err);
      });
  },
  addQues: (req, res) => {
    addQuestion(req.params.product_id, req.body)
      .then(res.sendStatus(204))
      .catch(err => {
        res.sendStatus(500);
        console.log(err);
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
