const {
  getAnswer,
  addAnswer,
  updateAnswer
} = require("../models/answersModels.js");

module.exports = {
  getAns: (req, res) => {
    getAnswer(req.params.question_id)
      .then(data => {
        let answerList = { rowCount: data.rowCount, rows: data.rows };
        res.send(answerList).status(200);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log(err);
      });
  },
  addAns: (req, res) => {
    addAnswer(req.params.question_id, req.body)
      .then(res.sendStatus(204))
      .catch(err => {
        res.sendStatus(500);
        console.log(err);
      });
  },
  updateAns: (req, res) => {
    updateAnswer(req.params.answer_id, req.url)
      .then(res.sendStatus(204))
      .catch(err => {
        res.sendStatus(500);
        console.log(err);
      });
  }
};
