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
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `Project_id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(45) DEFAULT NULL,
  `Description` varchar(200) DEFAULT NULL,
  `Student` varchar(200) DEFAULT NULL,
  `Email` varchar(200) DEFAULT NULL,
  `Internal` varchar(45) DEFAULT NULL,
  `External` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

CREATE TABLE `progress` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(45) DEFAULT NULL,
  `supEmail` varchar(200) DEFAULT NULL,
  `reportUrl` varchar(500) DEFAULT NULL,
  `userName` varchar(500) DEFAULT NULL,
  `userEmail` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
--
-- Dumping data for table `project`
--


CREATE TABLE `project` (
  `project_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `internal` varchar(45) DEFAULT NULL,
  `external` varchar(45) DEFAULT NULL,
  `batch` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `projectStd` (
  `id` int NOT NULL AUTO_INCREMENT,
  `project_id` varchar(45) DEFAULT NULL,
  `fullName` varchar(100) DEFAULT NULL,
  `rollNo` varchar(45) DEFAULT NULL,
  `email` varchar(65) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `grades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `projectTitle` varchar(45) DEFAULT NULL,
  `project_id` varchar(200) DEFAULT NULL,
  `batch` varchar(200) DEFAULT NULL,
  `group_id` varchar(200) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `evlP` varchar(45) DEFAULT NULL,
  `evlName1` varchar(45) DEFAULT NULL,
  `evlName2` varchar(45) DEFAULT NULL,
  `evlName3` varchar(45) DEFAULT NULL,
  `designation1` varchar(45) DEFAULT NULL,
  `designation2` varchar(45) DEFAULT NULL,
  `designation3` varchar(45) DEFAULT NULL,
  `stdRoll1` varchar(45) DEFAULT NULL,
  `stdRoll2` varchar(45) DEFAULT NULL,
  `stdRoll3` varchar(45) DEFAULT NULL,
  `stdName1` varchar(45) DEFAULT NULL,
  `stdName2` varchar(45) DEFAULT NULL,
  `stdName3` varchar(45) DEFAULT NULL,
  `groupP1` varchar(45) DEFAULT NULL,
  `groupP2` varchar(45) DEFAULT NULL,
  `groupP3` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `criteria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `grade_id` varchar(45) DEFAULT NULL,
  `project_id` varchar(45) DEFAULT NULL,
  `marks1` varchar(200) DEFAULT NULL,
  `marks2` varchar(200) DEFAULT NULL,
  `marks3` varchar(200) DEFAULT NULL,
  `reMarks1` varchar(45) DEFAULT NULL,
  `reMarks2` varchar(45) DEFAULT NULL,
  `reMarks3` varchar(45) DEFAULT NULL,
  `criteriaNo` varchar(45) DEFAULT NULL,
  `evalNo` varchar(45) DEFAULT NULL,
  `stdRollNo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `weightage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `project_id` varchar(45) DEFAULT NULL,
  `weight1` varchar(200) DEFAULT NULL,
  `weight2` varchar(200) DEFAULT NULL,
  `weight3` varchar(200) DEFAULT NULL,
  `weight4` varchar(45) DEFAULT NULL,
  `finalReport` varchar(500) DEFAULT NULL,
  `otherRepots` varchar(500) DEFAULT NULL,
  `byChairman` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `weightage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `project_id` varchar(500) DEFAULT NULL,
  `weight1` varchar(500) DEFAULT NULL,
  `weight2` varchar(500) DEFAULT NULL,
  `weight3` varchar(500) DEFAULT NULL,
  `weight4` varchar(500) DEFAULT NULL,
  
  PRIMARY KEY (`id`),

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'OBE based FYP management system','FYP portal based on OBE system','Zoha Khattak','khattak4001679@cloud.neduet.edu.pk','Dr Shehnila Zardari','Dr Wasif'),(18,'TexChain',NULL,'ainny','abcc','jone','beck'),(19,'Medius',NULL,'saira','asndj','charlie','joe'),(20,'Sensor based IOT System',NULL,'asma','djdjh','mathew','anna'),(21,'AI based Skin Care App',NULL,'sana','ddjjd','james','anastasia');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-04 14:18:57
