-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fypdb
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `final_evaluating`
--

DROP TABLE IF EXISTS `final_evaluating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `final_evaluating` (
  `fe_id` int NOT NULL,
  `Individual_performance` varchar(45) DEFAULT NULL,
  `Overall_rating` varchar(45) DEFAULT NULL,
  `Group_marks` int DEFAULT NULL,
  `Total` int DEFAULT NULL,
  `faculty_id` int DEFAULT NULL,
  `p_id` int DEFAULT NULL,
  `enroll_no` int DEFAULT NULL,
  `evaluator_id` int DEFAULT NULL,
  PRIMARY KEY (`fe_id`),
  KEY `Faculty_id_idx` (`faculty_id`),
  KEY `p_id_idx` (`p_id`),
  KEY `enroll_no_idx` (`enroll_no`),
  KEY `evaluator_id_idx` (`evaluator_id`),
  CONSTRAINT `enroll_no` FOREIGN KEY (`enroll_no`) REFERENCES `student` (`Enrollno`),
  CONSTRAINT `evaluator_id` FOREIGN KEY (`evaluator_id`) REFERENCES `evaluator` (`Evaluator_id`),
  CONSTRAINT `faculty_id` FOREIGN KEY (`faculty_id`) REFERENCES `faculty` (`faculty_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `final_evaluating`
--

LOCK TABLES `final_evaluating` WRITE;
/*!40000 ALTER TABLE `final_evaluating` DISABLE KEYS */;
/*!40000 ALTER TABLE `final_evaluating` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-04 14:19:01
