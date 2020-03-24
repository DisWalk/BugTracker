-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: bug
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assignment`
--

DROP TABLE IF EXISTS `assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assignment` (
  `pid` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  KEY `pid` (`pid`),
  KEY `uid` (`uid`),
  CONSTRAINT `assignment_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `project` (`pid`) ON DELETE CASCADE,
  CONSTRAINT `assignment_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
INSERT INTO `assignment` VALUES (2,65),(2,66),(2,68),(3,68),(3,71),(3,65),(1,65),(1,66),(1,68),(1,71),(4,66),(4,68),(4,67);
/*!40000 ALTER TABLE `assignment` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER logA
before delete on assignment
for each row 
begin 
insert into historyAssignment values(old.pid,old.uid,now());
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `historyAssignment`
--

DROP TABLE IF EXISTS `historyAssignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historyAssignment` (
  `pid` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historyAssignment`
--

LOCK TABLES `historyAssignment` WRITE;
/*!40000 ALTER TABLE `historyAssignment` DISABLE KEYS */;
INSERT INTO `historyAssignment` VALUES (1,67,'2020-02-16 09:34:52'),(1,66,'2020-02-16 09:34:52'),(1,68,'2020-02-16 09:34:52'),(1,65,'2020-02-16 09:35:06'),(1,66,'2020-02-16 09:35:06'),(1,68,'2020-02-16 09:35:06'),(1,65,'2020-02-16 10:31:17'),(1,66,'2020-02-16 10:31:17'),(1,68,'2020-02-16 10:31:17'),(2,67,'2020-02-16 10:33:05'),(2,66,'2020-02-16 10:33:05'),(2,68,'2020-02-16 10:33:05'),(2,65,'2020-02-16 10:33:15'),(2,66,'2020-02-16 10:33:15'),(2,68,'2020-02-16 10:33:15'),(1,65,'2020-02-17 11:04:59'),(1,66,'2020-02-17 11:04:59'),(1,68,'2020-02-17 11:04:59'),(2,67,'2020-02-18 10:20:56'),(2,66,'2020-02-18 10:20:56'),(2,68,'2020-02-18 10:20:56'),(1,67,'2020-02-18 12:06:23'),(1,66,'2020-02-18 12:06:23'),(1,68,'2020-02-18 12:06:23'),(1,66,'2020-02-18 12:17:49'),(1,68,'2020-02-18 12:17:49'),(1,67,'2020-02-18 12:17:49'),(1,68,'2020-02-18 12:20:17'),(1,71,'2020-02-18 12:20:17'),(1,66,'2020-02-18 12:23:10'),(1,68,'2020-02-18 12:23:10'),(1,67,'2020-02-18 12:23:10'),(1,66,'2020-02-18 12:24:18'),(1,68,'2020-02-18 12:24:18'),(1,67,'2020-02-18 12:24:18'),(1,68,'2020-02-18 12:26:33'),(1,71,'2020-02-18 12:26:33'),(1,67,'2020-02-18 12:26:33'),(1,67,'2020-02-18 12:28:26'),(1,66,'2020-02-18 12:28:26'),(1,71,'2020-02-18 12:28:26'),(1,67,'2020-02-18 13:19:10'),(1,68,'2020-02-18 13:19:10'),(1,71,'2020-02-18 13:19:10'),(1,67,'2020-02-18 19:05:28'),(1,68,'2020-02-18 19:05:28'),(1,71,'2020-02-18 19:05:28'),(1,67,'2020-02-18 19:14:01'),(1,68,'2020-02-18 19:14:01'),(1,71,'2020-02-18 19:14:01'),(1,67,'2020-02-18 19:25:29'),(1,66,'2020-02-18 19:25:29'),(1,68,'2020-02-18 19:25:29'),(1,67,'2020-03-22 08:57:13'),(1,68,'2020-03-22 08:57:13'),(1,71,'2020-03-22 08:57:13');
/*!40000 ALTER TABLE `historyAssignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historyProject`
--

DROP TABLE IF EXISTS `historyProject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historyProject` (
  `pid` int(11) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historyProject`
--

LOCK TABLES `historyProject` WRITE;
/*!40000 ALTER TABLE `historyProject` DISABLE KEYS */;
INSERT INTO `historyProject` VALUES (1,'buge','yepe','2020-02-16 09:34:52'),(1,'buged','yepe','2020-02-16 09:35:06'),(1,'bugedsss','yepe','2020-02-16 10:31:17'),(2,'shree','yeps','2020-02-16 10:33:05'),(2,'SHREE','yeps','2020-02-16 10:33:15'),(1,'FVALLI','yepz','2020-02-17 11:04:59'),(2,'shree12','yeps','2020-02-18 10:20:56'),(1,'SHALAA','yepz','2020-02-18 12:06:23'),(1,'SHALAA','yepz','2020-02-18 12:17:49'),(1,'SHALAA','yepz','2020-02-18 12:20:17'),(1,'SHALAA','yepz','2020-02-18 12:23:09'),(1,'SHALAA','yepz','2020-02-18 12:24:18'),(1,'SHALAA','yepz','2020-02-18 12:26:33'),(1,'SHALAA','yepz','2020-02-18 12:28:26'),(1,'SHALAA','yepz','2020-02-18 13:19:10'),(1,'SHALAA','yepz','2020-02-18 19:05:28'),(1,'NLA','yepz','2020-02-18 19:14:01'),(1,'NLAp','yep','2020-02-18 19:25:29'),(1,'NLAp','yep','2020-03-22 08:57:13');
/*!40000 ALTER TABLE `historyProject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historyTicket`
--

DROP TABLE IF EXISTS `historyTicket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `historyTicket` (
  `tid` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `assigned_dev` int(11) DEFAULT NULL,
  `submitter` int(11) DEFAULT NULL,
  `project` int(11) DEFAULT NULL,
  `priority` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `ts` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historyTicket`
--

LOCK TABLES `historyTicket` WRITE;
/*!40000 ALTER TABLE `historyTicket` DISABLE KEYS */;
INSERT INTO `historyTicket` VALUES (14,'gffhb','g',68,69,1,'critical','incomplete','ui','2020-02-16 18:11:42'),(14,'gffhb dsfd','g',66,69,1,'critical','incomplete','ui','2020-02-16 19:19:49'),(14,'SHALALALA','g',68,69,1,'critical','incomplete','ui','2020-02-17 16:36:14'),(19,'iifff','o',68,69,1,'important','incomplete','ui','2020-02-17 16:53:52'),(19,'CITYOFSTARS','o',66,69,1,'critical','complete','ui','2020-02-18 23:29:49'),(19,'CITYOFSTARS','o',66,69,1,'normal','complete','ui','2020-02-18 23:31:09'),(14,'brad','o',68,69,2,'important','incomplete','db','2020-02-18 23:31:46'),(14,'brad','o',68,69,1,'critical','incomplete','ui','2020-02-19 00:35:05'),(19,'CITYOFSTARSsss','o',68,69,1,'critical','complete','ui','2020-02-19 00:42:49'),(19,'CITYOFSTARSsss','o',68,69,1,'critical','incomplete','ui','2020-02-19 00:45:17'),(19,'HSHSHS','o',66,69,1,'critical','incomplete','ui','2020-02-19 00:46:06'),(19,'HSHSHS','o',68,69,1,'important','incomplete','ui','2020-02-19 00:55:40'),(19,'HSHSHS','o',68,69,1,'important','incomplete','ui','2020-02-19 15:54:08'),(14,'brad','o',66,69,2,'critical','incomplete','ui','2020-02-19 16:06:29'),(14,'brad','o',66,69,2,'normal','complete','db','2020-02-19 16:22:58'),(19,'HSHSHS','o',66,69,1,'critical','incomplete','ui','2020-02-19 17:07:42'),(14,'ii','o',68,69,1,'top','c','ui','2020-02-23 19:58:59'),(19,'BLABLABLA','oo',66,69,1,'critical','incomplete','contact','2020-02-23 20:00:35'),(14,'ii','o',66,69,1,'important','incomplete','db','2020-03-18 12:11:07'),(14,'ii','o',66,69,1,'normal','incomplete','db','2020-03-22 15:58:59'),(20,'oof','oof',71,69,1,'normal','service','complete','2020-03-22 16:11:23');
/*!40000 ALTER TABLE `historyTicket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,'NLA','nonoon'),(2,'shree12','yeps'),(3,'IDK','idkk'),(4,'hallelujah','dddd');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER logP
before update on project 
for each row 
begin 
insert into historyProject values(old.pid,old.name,old.description,now());
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ticket` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `assigned_dev` int(11) DEFAULT NULL,
  `submitter` int(11) DEFAULT NULL,
  `project` int(11) DEFAULT NULL,
  `priority` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `ts` datetime DEFAULT NULL,
  PRIMARY KEY (`tid`),
  KEY `assigned_dev` (`assigned_dev`),
  KEY `submitter` (`submitter`),
  KEY `project` (`project`),
  CONSTRAINT `ticket_ibfk_1` FOREIGN KEY (`assigned_dev`) REFERENCES `users` (`uid`) ON DELETE CASCADE,
  CONSTRAINT `ticket_ibfk_2` FOREIGN KEY (`submitter`) REFERENCES `users` (`uid`) ON DELETE CASCADE,
  CONSTRAINT `ticket_ibfk_3` FOREIGN KEY (`project`) REFERENCES `project` (`pid`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (14,'iiddd','of',68,69,2,'low','incomplete','contact','2020-02-12 23:28:10'),(19,'BLABLABLA','oo',68,69,2,'normal','incomplete','db','2020-02-12 23:28:10'),(20,'ioof','oofi',71,69,1,'important','incomplete','contact','2020-03-22 16:09:42');
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER logT
before update on ticket
for each row 
begin 
insert into historyTicket values(old.tid,old.title,old.description,old.assigned_dev,old.submitter,old.project,old.priority,old.status,old.type,now());
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (65,'DISHA WALKE','rajniwalke24@gmail.com','0626b633129acbe99b1f52a9112f3c4dd7bbd13c86763764c5a18c0b72d9cf8b','project-manager'),(66,'DEVANSH','dishawalke2699@gmail.com','74bd50f98d4b8b512e5856f1c718974d5b066fd040a879ff72a84e0501563625','developer'),(67,'JENNIE','jennie@j.com','7cbccda65959a4fe629dbdf546ae3ddea9328ae5a53498785f4a27394fe26515','project-manager'),(68,'LISA','dishawalke26991@gmail.com','503afc4bd66d51aeda05cbcdbf07ad0d560d03fe0819f365629c48299e92b539','developer'),(69,'ROSE','rose@rose.com','618d663af0f1ec88a5a19defa65a2f80d06582a832510b12f475d80870bdb3ab','client'),(70,'MIA','admin@a.com','61be55a8e2f6b4e172338bddf184d6dbee29c98853e0a0485ecee7f27b9af0b4','admin'),(71,'BILLY','biil@b.c','81cc5b17018674b401b42f35ba07bb79e211239c23bffe658da1577e3e646877','developer');
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

-- Dump completed on 2020-03-22 19:17:05
