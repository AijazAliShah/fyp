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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `stdId` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Zoha Khattak','$2b$10$0U4GcsGagtib0Nehfod2AeVTm.eBM0/JaFmcQtuXf/fF4YgQheIBy','2021-05-28 15:00:21','2021-05-28 15:00:21','zohakhattak1913@gmail.com'),(2,'abcd','$2b$10$P.sYBsYdZh9kAZhq9rOhyukYLAQ3fS6.WMMVCcBM42iOcwtbUniw.','2021-05-28 18:03:32','2021-05-28 18:03:32','abcd@gmail.com'),(3,'Test','$2b$10$d6TUKEWsLondoJQQLVGou.SYbpVBLCB4v5zbHFqswZQt/yueE0QrK','2021-05-28 18:15:14','2021-05-28 18:15:14','test@hotmail.com'),(4,'test','$2b$10$cZ1QimJThB6Qy0qS1mjikOCTOJrlT8z1tJYeVw2Xbm65PiVff8gcK','2021-05-31 14:52:32','2021-05-31 14:52:32','test@gmail.com'),(5,'Quratul Ain','$2b$10$ZAtKou7gVVlH2BOIVoHBRuGpLroP.RcwbBEH7Qlw2DZdNfEAWfmTq','2021-08-01 15:11:15','2021-08-01 15:11:15','quratulain@gmail.com'),(6,'Quratul Ain','$2b$10$HFhHF48j1qRMVWhE9hHoSetZshhQOsQu04nlHq/v8vWDuAz4rr0HO','2021-08-01 15:11:24','2021-08-01 15:11:24','quratulain@gmail.com'),(7,'Quratul Ain','$2b$10$jN/aSsnGZX18Uy9dkfmypOrf/jA6nL.L907xNePL69sKZu0aIVJH2','2021-08-01 15:16:23','2021-08-01 15:16:23','quratulain@gmail.com'),(8,'Quratul Ain','$2b$10$Aao4qGz9I1XDwodGdphLAe/v4Soz9hTapGCYBCnf/0ne5Z/sop0tm','2021-08-01 15:16:26','2021-08-01 15:16:26','quratulain@gmail.com'),(9,'Quratul Ain','$2b$10$s7UXDxwEU4LzCWOlbPb/Zee/XuZrtG/V/9LiksAlSdkVNlhN4lJMq','2021-08-01 15:16:53','2021-08-01 15:16:53','quratulain@gmail.com'),(10,'user','$2b$10$Rp8ZUXgRPSHLDSykGM.C.uR4hKFyG7XuQ8KZSZLOywIbeEIFCA26a','2021-08-03 19:09:11','2021-08-03 19:09:11','user@gmail.com'),(11,'user1','$2b$10$C8AbYpVfxudKPZdfpjdkY.wguRRpudULWLphSdD2xl8t0tM.VMj3a','2021-08-03 19:10:18','2021-08-03 19:10:18','user@gmail.com'),(12,'zzz','$2b$10$1MrzWhixMB/0eBnxnwcGReS004EpB8tl.hr6J32jyPx6JvBI/ysa2','2021-08-03 19:20:35','2021-08-03 19:20:35','abcd@gmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-04 14:18:58
