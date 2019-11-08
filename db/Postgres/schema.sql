DROP DATABASE qanda;
CREATE DATABASE qanda;
\c qanda;

-- ---
-- Table 'Question'
-- 
-- ---
		
CREATE TABLE Question (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INT NULL,
  question_body VARCHAR(1000) NULL,
  question_date DATE NULL,
  asker_name VARCHAR(60) NULL,
  asker_email VARCHAR(60) NULL,
  question_helpfulness INT NULL,
  question_reported INT NULL
);

-- ---
-- Table 'Answers'
-- 
-- ---
		
CREATE TABLE Answers (
  id SERIAL PRIMARY KEY NOT NULL,
  answer_body VARCHAR(1000) NULL,
  answer_date DATE NULL,
  answerer_name VARCHAR(60) NULL,
  answerer_email VARCHAR(60) NULL,
  answer_reported INT NULL,
  answer_helpfulness INT NULL,
  id_Question INT NOT NULL
);

-- ---
-- Table 'Photos'
-- 
-- ---
		
CREATE TABLE Photos (
  id SERIAL PRIMARY KEY NOT NULL,
  photo_url VARCHAR(300) NULL,
  id_Answers INT NOT NULL
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE Answers ADD FOREIGN KEY (id_Question) REFERENCES Question (id);
ALTER TABLE Photos ADD FOREIGN KEY (id_Answers) REFERENCES Answers (id);

-- ---
-- Indexes
-- ---

CREATE INDEX question_id_index ON Question (id);
CREATE INDEX answer_id_index ON Answers (id);
CREATE INDEX photos_id_index ON Photos (id);