-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-11-2021 a las 22:15:25
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_final`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'UTENSILIOS DE COCINA CURIOSOS QUE TE HARÁN LA VIDA MÁS FÁCIL', 'Si llamas a los de comida a domicilio más que a tu madre, esta selección de \'gadgets\' culinarios te interesa', 'En algunos casos la cocina es ese territorio inexplorado de la casa que se utiliza en contadas ocasiones para preparar el desayuno y poco más. Si para ti cocinar es cocer un huevo duro y hacer un filete a la plancha es una ardua labor en la que necesitas armadura y escudo contra el aceite, tenemos buenas noticias para ti. La tecnología y el diseño se alían para ponerte las cosas más fácil en la cocina.\r\n\r\nLa gran variedad que ofrece Internet en estos gadgets curiosos resulta abrumadora. Por eso en EL PAÍS Escaparate hemos seleccionado algunos artículos muy interesantes por la variedad de funciones que aportan o por la facilidad que ofrecen para hacer diferentes comidas como croquetas, sushi o dumplings. ¿Tienes fervor por el aguacate? Esta lista también te interesa.\r\n\r\n1.-Para hacer croquetas (y albóndigas)\r\n2.-Cuchillo que calienta la mantequilla\r\n3.-Pela aguacates\r\n4.-Para hacer dumplings en casa\r\n5.-Tabla de cortar con colador\r\n6.-Para hacer zoodles de verdura', 'qwbaecsxb3mjorm1bvag'),
(2, 'RECETA PAN  LIGERO DE PLÁTANO', 'Ingredientes para la mezcla seca: 240g de harina integral, 12g de levadura en polvo, 4g de bicarbonato, pizca de sal.\r\n\r\nIngredientes para la mezcla líquida: 320 g de plátanos maduros, 130g de puré de manzana, 110g de mantequilla derretida y un poco para engrasar el molde, 90g de miel, 20g de zumo de manzana, esencia de vainilla al gusto.', 'Receta: Procesar los ingredientes para la mezcla líquida en una batidora e ir añadiendo la mezcla seca gradualmente. Mezclar bien la masa resultante y ponerla en el molde  de cerámica untado en mantequilla. Colocar la tapa untada con mantequilla en el molde. Introducir el molde en el horno precalentado a 180ºC y hornear durante unos 60minutos. Utilizar un pincho antes de sacar el pan de molde, para asegurarse que está bien hecho también en su interior. Desmoldarlo cuidadosamente. Consejo útil: Añadir frutos secos o fruta deshidratada en la masa.', 'cbw8huco7l4oxeoovulb'),
(3, '¡REGÍSTRATE A NUESTRO BOLETÍN GRATUITO!', 'ÚNETE A NUESTRA COMUNIDAD DE COCINEROS.', 'Obtén los más recientes videos instructivos de cocina, recomendaciones de expertos y técnicas enviadas directamente a tu correo electrónico. Recibirás instrucción completa de expertos de clase mundial. ¡Regístrate hoy y comienza a mejorar tus habilidades en cocina, creando algo delicioso!', 'spd76h8bruxwgga3kqsf'),
(4, 'PREMIOS NACIONALES DE GASTRONOMÍA 2021', 'Os contamos las novedades en los Premios Nacionales de Gastronomía 2021 que se entregarán en breve, será el próximo 22 de noviembre en Madrid. La principal novedad es la reducción de categorías en estos premios que cumplen su 46ª edición, además, se ha creado un jurado para cada categoría. Por cierto, ya conocemos a algunos galardonados', 'El próximo 22 de noviembre se celebrará la gala de entrega de los Premios Nacionales de Gastronomía 2021, es la 46 edición de unos premios que otorga la Real Academia de Gastronomía presidida por Lourdes Plana Bellido en este último año, y con ello se han dado a conocer algunos cambios en estos galardones. La RAG lo anuncia así: ‘Los Premios Nacionales de Gastronomía se renuevan’, y explican que lo hacen alineándose con la actualidad gastronómica y la nueva etapa que vive la Real Academia de Gastronomía.\r\n\r\nEl cambio principal que comunican es que se reducen las categorías establecidas para estos premios, pasando de once galardones a seis, y son los siguientes: Mejor Jefe de Cocina, Mejor Director de Sala, Mejor Sumiller, Mejor Investigación e Innovación Gastronómica, Mejor Comunicación Gastronómica y Premio a “Toda una Vida”. Por lo tanto, las categorías que desaparecen de estos premios son: Gastronomía Saludable (personalidad), Gastronomía saludable (Institución), y se unifican o adaptan los distintos premios a publicaciones periódicas en formato digital, papel, libros y periodismo, ahora es ‘comunicación gastronómica’. Veamos cuáles son los valores de cada premio.', 'rzyrj8vndasp8omzreea'),
(6, 'Prueba Título4', 'Prueba Subtitulo4', 'Prueba Cuerpo4', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'jf', 'a01610228fe998f515a72dd730294d87'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
