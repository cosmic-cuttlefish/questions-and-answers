const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const routes = require("./routes/qandaRoutes.js");
const path = require("path");
const port = process.env.PORT || 3000;

//app.use(express.static("./client/dist"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/qa", routes);

app.get("/loaderio*", (req, res) => {
  let file = req.path.substr(1, req.path.length - 2);
  let filePath = path.resolve(`server/loaderio/${file}.txt`);
  res.status(200).sendFile(filePath);
});

app.listen(port, () => console.log(`App is listening on port ${port}!`));
