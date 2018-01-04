-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: chocoenjoie
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.16.04.1

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
-- Current Database: `chocoenjoie`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `chocoenjoie` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `chocoenjoie`;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(15) DEFAULT NULL,
  `password` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'alexisEnJoie','bob');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(30) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` text,
  `composition` text,
  `quantity` varchar(20) DEFAULT NULL,
  `weight` varchar(20) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Chocolat noir','Truffes à la crème fraîche','Dégustez la fondante friandise à base de chocolat et de crème fraîche.\r\nElle est façonnée en boule enrobée de cacao en poudre.\r\nLa truffe de chocolat des Princes complète la gamme des traditionnels chocolats pour les fêtes de fin d\'année.','Ingrédients : pâte de cacao, sucre, crème fraîche (25 %), beurre de cacao, cacao en poudre, alcool, sorbitol, arôme naturel vanille, lécithine de soja.\r\n\r\nCes chocolats sont confectionnés dans nos ateliers qui utilisent des fruits à coques, du soja, des céréales, des œufs, du lait et du sésame.\r\nPour des conditions de dégustation optimales, ce chocolat doit être conservé dans un endroit sec et frais (environ 17°), à l’abri de la lumière et avec un taux d\'humidité d\'environ 45/50 °.\r\nLa truffe contenant de la crème fraîche doit être dégustée rapidement.','15 pièces','200gr','truffes-creme.jpg'),(2,'Chocolat blanc','Délice chocolat blanc noix de coco','Ce délicieux bonbon moulé au chocolat blanc est fourré d’une ganache au chocolat blanc parfumée à la noix de coco.\r\nCe chocolat vous invite à la détente. L\'onctuosité du chocolat blanc, pur beurre de cacao, est délicatement allié aux parfums enivrants de la noix de coco.','Chocolat de couverture blanc 55 % (cacao min 25,9 %), sucre, beurre de cacao, poudre de lait entier, émulsifiant (lécithine de soja), arôme naturel de vanille.\r\nIntérieur : 45 % de ganache coco: crème UHT, sucre, beurre de cacao, poudre de lait entier, noix de coco râpée (3,10 %), rhum, arôme naturel de noix de coco, alcool neutre.\r\n\r\nCes chocolats sont confectionnés dans nos ateliers qui utilisent des fruits à coques, du soja, des céréales, des œufs, du lait et du sésame.\r\nPour des conditions de dégustation optimales, ce chocolat doit être conservé dans un endroit sec et frais (environ 17°), à l\'abri de la lumière et des odeurs.','15 pièces','300gr','chocoblanc_delice_coco.jpg'),(3,'Chocolat mix','Orangettes','Dans cette orangette, l\'écorce d\'orange confite s\'habille de chocolat intense pour offrir au palais une dégustation en deux teinte : l\'une corsée, l\'autre acidulée. Un délice croquant et suave à la fois.','Ecorces d\'oranges confites recouvertes de chocolat noir 100 % pur beurre de cacao.','30 pièces','200gr','orangettes.jpeg'),(4,'chocolat lait','Fondants caramel lait','Vous allez fondre de plaisir avec ce bonbon de chocolat au lait fourré d\'une ganache caramel beurre salé.\r\nVos papilles seront surprises par l\'onctuosité d\'une ganache avec la douceur du caramel.\r\nQuel délice !','Sucre, crème, beurre laitier, beurre de cacao, poudre de lait, sirop de glucose, sel, lécithine de soja, arôme naturel de vanille.\r\n\r\nCes chocolats sont confectionnés dans nos ateliers qui utilisent des fruits à coques, du soja, des céréales, des œufs, du lait et du sésame.\r\nPour des conditions de dégustation optimales, ce chocolat doit être conservé dans un endroit sec et frais (environ 17°), à l’abri de la lumière et des odeurs.','25 pièces','400gr','fondant-caramel-lait.jpg'),(5,'chocolat noir','Fondants caramel noir','Dégustez les bonbons de chocolat noir fourré avec une ganache au caramel beurre salé.\r\nNos bonbons de chocolat sont confectionnés dans nos ateliers, avec le plus grand soin.\r\nRetrouvez les saveurs caramel mariées au chocolat, qui vous donnent un petit goût breton.','Sucre, crème, pâte de cacao, beurre laitier, beurre de cacao, matière grasse laitière, sirop de glucose, sel, lécithine de soja, arôme naturel de vanille.\r\nCes chocolats sont confectionnés dans nos ateliers qui utilisent des fruits à coques, du soja, des céréales, des œufs, du lait et du sésame.\r\nPour des conditions de dégustation optimales, ce chocolat doit être conservé dans un endroit sec et frais (environ 17°), à l’abri de la lumière et des odeurs.','25 pièces','400gr','fondant-caramel-noir.jpg'),(6,'chocolat noir','Palets d\'Or','La star incontestée des chocolatiers : la ganache onctueuse et fondante, enrobée de chocolat noir.\r\nD\'une grande délicatesse, ce chocolat à base d\'une ganache chocolat à la crême fraîche et au café aromatisée d\'un peu de cognac, est un bonbon de chocolat incontournable.\r\nTrès raffiné, il est décoré d\'éclats dorés.','Pâte de cacao, sucre, crème fraîche, beure de cacao, Cognac, café soluble, matière grasse laitière anhydre, arôme naturel de vanille, émulsifiant : lécithine de soja.  Décor beurré de cacao, cacao, colorants E110 E102 E171\r\n\r\nCes chocolats sont confectionnés dans nos ateliers qui utilisent des fruits à coques, du soja, des céréales, des œufs, du lait et du sésame. Peut contenir des traces de gluten.\r\nPour des conditions de dégustation optimales, ce chocolat doit être conservé dans un endroit sec et frais (environ 17°), à l’abri de la lumière et des odeurs.','20 pièces','250gr','palets-d-or.jpg'),(7,'Chocolat mix','Pralinés aux noix','Ce chocolat est un fin praliné enrobé de chocolat noir, décoré d\'un cerneau de noix du Périgord.\r\nLe praliné fabriqué avec des amandes du Levant et des noisettes du Piémont est une fine gourmandise agrémentée d\'une belle noix décortiquée.\r\nDégustez ce praliné onctueux et laissez vous emporter par la magie du chocolat.','Sucre, pâte de cacao, cerneaux de noix, amandes, noisettes, beurre de cacao, matière grasse laitière anhydre, arôme naturel de vanille, émulsifiant : lécithine de soja.\r\n\r\nCes chocolats sont confectionnés dans nos ateliers qui utilisent des fruits à coques, du soja, des céréales, des œufs, du lait et du sésame.\r\nPour des conditions de dégustation optimales, ce chocolat doit être conservé dans un endroit sec et frais (environ 17°), à l’abri de la lumière et des odeurs.','20 pièces','200gr','praline-aux-noix.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workshops`
--

DROP TABLE IF EXISTS `workshops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `workshops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workshops`
--

LOCK TABLES `workshops` WRITE;
/*!40000 ALTER TABLE `workshops` DISABLE KEYS */;
/*!40000 ALTER TABLE `workshops` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-07 13:42:07
