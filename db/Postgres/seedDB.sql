-- ---
-- Seed Table
-- ---

COPY Question (id, product_id, question_body, question_date, asker_name, asker_email, question_reported, question_helpfulness )
FROM '/Users/christianferdinand/Hack-Reactor/Repos/questions-and-answers/lib/questions.csv'
WITH DELIMITER ','  CSV HEADER;

COPY Answers (id, id_Question, answer_body, answer_date, answerer_name, answerer_email, answer_reported, answer_helpfulness )
FROM '/Users/christianferdinand/Hack-Reactor/Repos/questions-and-answers/lib/answers.csv'
WITH DELIMITER ','  CSV HEADER;

COPY Photos (id, id_Answers, photo_url)
FROM '/Users/christianferdinand/Hack-Reactor/Repos/questions-and-answers/lib/answers_photos.csv'
WITH DELIMITER ','  CSV HEADER;


-- ---
-- Edit Tables
-- ---

SELECT setval('question_id_seq', max(id)) FROM Question;
UPDATE Question SET question_body = (TRIM(question_body)), asker_name = (TRIM(asker_name)), asker_email = (TRIM(asker_email));

SELECT setval('answers_id_seq', max(id)) FROM Answers;
UPDATE Answers SET answer_body = (TRIM(answer_body)), answerer_name = (TRIM(answerer_name)), answerer_email = (TRIM(answerer_email));

SELECT setval('photos_id_seq', max(id)) FROM Photos;
UPDATE Photos SET photo_url = (TRIM(photo_url));