SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema veglife
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `veglife` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `veglife` ;

-- -----------------------------------------------------
-- Table `veglife`.`gameplays`
-- -----------------------------------------------------
DROP TABLE IF EXISTS gameplays;

CREATE TABLE IF NOT EXISTS gameplays (
  gam_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  game_name VARCHAR(100) NOT NULL,
  reg_user_email VARCHAR(50) NOT NULL,
  video_gameplay BLOB NOT NULL
);

ALTER TABLE gameplays ADD CONSTRAINT email_un UNIQUE (reg_user_email);