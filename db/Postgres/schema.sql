SELECT 'CREATE DATABASE qanda'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'qanda')\gexec
\c qanda;

-- ---
-- Table 'Question'
-- 
-- ---
DROP TABLE IF EXISTS Question
CREATE TABLE Question (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INT NULL,
  question_body VARCHAR(1000) NULL,
  question_date DATE DEFAULT CURRENT_TIMESTAMP,
  asker_name VARCHAR(60) NULL,
  asker_email VARCHAR(60) NULL,
  question_helpfulness INT DEFAULT 0,
  question_reported INT DEFAULT 0
);

-- ---
-- Table 'Answers'
-- 
-- ---
DROP TABLE IF EXISTS Answers
CREATE TABLE Answers (
  id SERIAL PRIMARY KEY NOT NULL,
  answer_body VARCHAR(1000) NULL,
  answer_date DATE DEFAULT CURRENT_TIMESTAMP,
  answerer_name VARCHAR(60) NULL,
  answerer_email VARCHAR(60) NULL,
  answer_reported INT DEFAULT 0,
  answer_helpfulness INT DEFAULT 0,
  id_Question INT NOT NULL
);

-- ---
-- Table 'Photos'
-- 
-- ---
DROP TABLE IF EXISTS Photos
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

CREATE INDEX question_id_index ON Question (product_id);
CREATE INDEX answer_id_index ON Answers (id_Question);
CREATE INDEX photos_id_index ON Photos (id_Answers);