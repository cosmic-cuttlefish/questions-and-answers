const mongoose = require("mongoose");
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost:27017/badmovies", {
    useNewUrlParser: true
  });
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to db...");
});

const QuestionSchema = mongoose.Schema({
  product_id: Number,
  question_body: String,
  question_date: String,
  asker_name: String,
  asker_email: String,
  question_helpfulness: Number,
  question_reported: Number,
  answers: [
    {
      answer_id: Number,
      answer_body: String,
      answer_date: String,
      answerer_name: String,
      answer_helpfulness: Number,
      question_id: Number,
      photos: Array
    }
  ]
});

const Questions = mongoose.model("Questions", QuestionSchema);

module.exports.UserFav = UserFav;
