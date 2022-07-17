SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema veglife
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `veglife` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `veglife` ;

-- -----------------------------------------------------
-- Table `veglife`.`resenhas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS resenhas;

CREATE TABLE IF NOT EXISTS resenhas (
  res_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  game_name VARCHAR(100) NOT NULL,
  reg_user_email VARCHAR(50) NOT NULL,
  img_resenha BLOB NULL,
  texto_resenha VARCHAR(3) NOT NULL
);

ALTER TABLE resenhas ADD CONSTRAINT email_un UNIQUE (reg_user_email);


