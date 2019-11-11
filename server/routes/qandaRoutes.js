const router = require("express").Router();
const questionControllers = require("../controllers/questionsControllers.js");
const answersControllers = require("../controllers/answersControllers.js");

//Questions
router.get("/:id/questions", questionControllers.getQA);
router.post("/:product_id", questionControllers.addQues);
router.put("/question/:question_id/helpful", questionControllers.updateQues);
router.put("/question/:question_id/report", questionControllers.updateQues);

//Answers
router.get("/:question_id/answers", answersControllers.getAns);
router.post("/:question_id/answers", answersControllers.addAns);
router.put("/answer/:answer_id/helpful", answersControllers.updateAns);
router.put("/answer/:answer_id/report", answersControllers.updateAns);

module.exports = router;
