-- ---
-- Seed Table
-- ---

COPY Question (id, product_id, question_body, question_date, asker_name, asker_email, question_reported, question_helpfulness )
FROM '/Users/christianferdinand/Documents/Hack Reactor/HRNYC25/questions-and-answers/lib/questions.csv'
WITH DELIMITER ','  CSV HEADER;

COPY Answers (id, id_Question, answer_body, answer_date, answerer_name, answerer_email, answer_reported, answer_helpfulness )
FROM '/Users/christianferdinand/Documents/Hack Reactor/HRNYC25/questions-and-answers/lib/answers.csv'
WITH DELIMITER ','  CSV HEADER;

COPY Photos (id, id_Answers, photo_url)
FROM '/Users/christianferdinand/Documents/Hack Reactor/HRNYC25/questions-and-answers/lib/answers_photos.csv'
WITH DELIMITER ','  CSV HEADER;