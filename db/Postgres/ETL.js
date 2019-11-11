//TODO: Create ETL process after full set up of docker and AWS for now continuing with postgres COPY

const parser = require("csv-parse");
// const  = csv.parse();
const fs = require("fs");
const assert = require("assert");

fs.readFile(
  "/Users/christianferdinand/Documents/test.csv",
  "utf-8",
  (err, data) => {
    parser(
      `${data}`.trim(),
      {
        skip_empty_lines: true,
        delimiter: ",",
        columns: true,
        trim: true
      },
      function(err, records) {
        records.map(question => {
          console.log(
            question.date_written.replace(/-/g, "/").replace(/T.+/, "")
          );
        });
        //assert.deepEqual(console.log(records));
      }
    );
  }
);
