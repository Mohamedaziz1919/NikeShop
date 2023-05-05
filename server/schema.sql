-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema nikeshop
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema nikeshop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `nikeshop` DEFAULT CHARACTER SET utf8 ;
USE `nikeshop` ;

-- -----------------------------------------------------
-- Table `nikeshop`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nikeshop`.`users` (
  `idusers` INT NOT NULL,
  `fullName` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nikeshop`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nikeshop`.`posts` (
  `idposts` INT NOT NULL,
  `image` VARCHAR(500) NOT NULL,
  `producName` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `price` VARCHAR(50) NOT NULL,
  `contactNumber` VARCHAR(50) NOT NULL,
  `quantity` VARCHAR(45) NOT NULL,
  `users_idusers` INT NOT NULL,
  PRIMARY KEY (`idposts`),
  INDEX `fk_posts_users_idx` (`users_idusers` ASC) VISIBLE,
  CONSTRAINT `fk_posts_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `nikeshop`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO users (idusers, fullName, password) 
VALUES (1, 'miraoui', 'yass123'), (2, 'sarhane', 'sousou12');

INSERT INTO `posts` (idposts, image, producName, category, price, contactNumber, quantity, users_idusers) VALUES 
(1, "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a6e54c9b-0f91-4b8c-9593-c0ff4af06f69/sportswear-tech-fleece-hoodie-and-trousers-set-mFkQhZ.png", "nike sportwear tech fleece", "baby", "£48.97", "216-25005567", 12, 1),
(2, 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/754ff2f5-942f-4e4e-80b2-870e31555171/air-max-bella-tr-5-training-shoes-vRTJKC.png', 'Nike air max', 'Shoes', '$107.5', '216-96226650', '10', 2);
