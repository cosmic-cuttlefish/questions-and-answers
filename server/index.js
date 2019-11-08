const express = require("express");
const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3000;

//app.use(express.static("./client/dist"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
