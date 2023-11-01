CREATE DATABASE  IF NOT EXISTS `blog` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `blog`;
-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(110) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Nombre: este campo se intuye como el nombre completo y los apellidos del autor en un solo campo, para ello, podríamos proponer un tinytext, pero vamos a utilizar un varchar de 110 que es más que suficiente. Se pudiese dar el caso en el que el nombre de 2 sea igual, por lo que no se aplicaría el campo unique.',
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Email: este campo debe recibir una serie de caracteres como letras, números, caracteres especiales, etc… Por dicho motivo se establece como un varchar 50, ya que se han visto casos de mail extremadamente largos y con esto quedarían cubiertos. Por otra parte, el mail es único, por cada autor.',
  `imagen` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Imagen: es un campo del tipo text específicamente por las longitudes que pueden poseer las URL d ellas imágenes depende de donde se encuentren almacenadas, las características del tipo text de 64KB deben ser mas que suficiente para este motivo.',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores`
--

LOCK TABLES `autores` WRITE;
/*!40000 ALTER TABLE `autores` DISABLE KEYS */;
INSERT INTO `autores` VALUES (1,'Juan Pérez','juanperez@email.com','imagen1.jpg'),(2,'María Gómez','mariagomez@email.com','imagen2.jpg'),(3,'Pedro Sánchez','pedrosanchez@email.com','imagen3.jpg'),(4,'Ana Martínez','anamartinez@email.com','imagen4.jpg'),(5,'Luis Rodríguez','luisrodriguez@email.com','imagen5.jpg'),(6,'Isabel López','isabellopez@email.com','imagen25.jpg');
/*!40000 ALTER TABLE `autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Título: campo que representa el título del blog, este debe ser único, no deberían de haber 2 títulos iguales, se representa con un varchar de 100, ya que lo recomendado es que los títulos tengan menos de 60 caracteres, con 100 sería mas que suficiente.',
  `descripcion` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Descripción: campo destinado a recibir una mayor cantidad de texto, donde va a estar la información del blog, por tal motivo, se opta por colocarlo como mediumtext, con esto será mas que suficiente para poder desarrollarlo.',
  `fecha_de_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de creación: campo que va a poseer una expresión por defecto, que nos permite capturar el valor en tiempo y fecha, en el que ha sido creado ese blog. Es del tipo datetime y utiliza la función now()',
  `categoria` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Categoria: es un campo que va a indicar la categoría del blog, con aplicarle un varchar(50), se asume como un tipo de dato mas que suficiente para cumplir con el objetivo previsto.',
  `autores_id` int NOT NULL COMMENT 'autores_id: campo de la relación entre las tablas post y autores.',
  PRIMARY KEY (`id`),
  UNIQUE KEY `titulo_UNIQUE` (`titulo`),
  KEY `fk_post_autores_idx` (`autores_id`),
  CONSTRAINT `fk_post_autores` FOREIGN KEY (`autores_id`) REFERENCES `autores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Cómo cocinar una pizza deliciosa','Aprende a hacer la mejor pizza en casa.','2023-10-27 00:00:00','Recetas',1),(2,'Los mejores destinos para viajar en 2024','Descubre los lugares que no puedes perderte.','2023-10-28 00:00:00','Viajes',2),(3,'Consejos para mantenerse en forma','Descubre cómo mantenerte activo y saludable.','2023-10-29 00:00:00','Salud',3),(4,'Cómo decorar tu hogar en estilo moderno','Ideas para renovar tu espacio.','2023-10-30 00:00:00','Decoración',4),(5,'Las últimas tendencias de moda','Descubre la moda más actual.','2023-10-31 00:00:00','Moda',5),(6,'Recetas fáciles para cocinar en casa','Platos deliciosos en pocos pasos.','2023-11-01 00:00:00','Recetas',6),(7,'Secretos de la cocina gourmet','Descubre los trucos de la alta cocina.','2023-11-02 00:00:00','Gastronomía',1),(8,'Los destinos más exóticos para aventureros','Explora lugares lejanos y emocionantes.','2023-11-03 00:00:00','Aventura',2),(9,'Cómo cultivar un jardín hermoso','Consejos para el cuidado de tus plantas.','2023-11-04 00:00:00','Jardinería',3),(10,'Tendencias en tecnología para el próximo año','Descubre lo último en gadgets y dispositivos.','2023-11-05 00:00:00','Tecnología',4),(11,'Ejercicios para mantenerse en forma en casa','Rutinas de entrenamiento sin necesidad de ir al gimnasio.','2023-11-06 00:00:00','Salud',2),(12,'Consejos de moda para hombres','Descubre cómo mejorar tu estilo.','2023-11-07 00:00:00','Moda',2);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-01 12:19:03
