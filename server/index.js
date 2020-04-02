const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const routes = require("./routes/qandaRoutes.js");
const port = process.env.PORT || 3000;

//app.use(express.static("./client/dist"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/qa", routes);

app.get("/loaderio*", (req, res) => {
  let file = req.path.substr(1);
  res.status(200).sendFile(__dirname + `/loaderio/${file}.txt`);
});

app.listen(port, () => console.log(`App is listening on port ${port}!`));
