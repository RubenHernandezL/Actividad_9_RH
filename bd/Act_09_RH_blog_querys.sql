-- Query para poder rellenar todos los campos de las tablas y poder hacer las respectivas pruebas

-- Insertamos 6 autores para las pruebas

INSERT INTO autores (nombre, email, imagen) VALUES
('Juan Pérez', 'juanperez@email.com', 'imagen1.jpg'),
('María Gómez', 'mariagomez@email.com', 'imagen2.jpg'),
('Pedro Sánchez', 'pedrosanchez@email.com', 'imagen3.jpg'),
('Ana Martínez', 'anamartinez@email.com', 'imagen4.jpg'),
('Luis Rodríguez', 'luisrodriguez@email.com', 'imagen5.jpg'),
('Isabel López', 'isabellopez@email.com', 'imagen25.jpg');

-- Insertamos 12 post relacionando los autores para las pruebas

INSERT INTO posts (titulo, descripcion, fecha_de_creacion, categoria, autores_id) VALUES
('Cómo cocinar una pizza deliciosa', 'Aprende a hacer la mejor pizza en casa.', '2023-10-27', 'Recetas', 1), -- Escrito por Juan Pérez
('Los mejores destinos para viajar en 2024', 'Descubre los lugares que no puedes perderte.', '2023-10-28', 'Viajes', 2), -- Escrito por María Gómez
('Consejos para mantenerse en forma', 'Descubre cómo mantenerte activo y saludable.', '2023-10-29', 'Salud', 3), -- Escrito por Pedro Sánchez
('Cómo decorar tu hogar en estilo moderno', 'Ideas para renovar tu espacio.', '2023-10-30', 'Decoración', 4), -- Escrito por Ana Martínez
('Las últimas tendencias de moda', 'Descubre la moda más actual.', '2023-10-31', 'Moda', 5), -- Escrito por Luis Rodríguez
('Recetas fáciles para cocinar en casa', 'Platos deliciosos en pocos pasos.', '2023-11-01', 'Recetas', 6), -- Escrito por Isabel López
('Secretos de la cocina gourmet', 'Descubre los trucos de la alta cocina.', '2023-11-02', 'Gastronomía', 1), -- Escrito por Guillermo García
('Los destinos más exóticos para aventureros', 'Explora lugares lejanos y emocionantes.', '2023-11-03', 'Aventura', 2), -- Escrito por Laura Torres
('Cómo cultivar un jardín hermoso', 'Consejos para el cuidado de tus plantas.', '2023-11-04', 'Jardinería', 3), -- Escrito por Carlos Fernández
('Tendencias en tecnología para el próximo año', 'Descubre lo último en gadgets y dispositivos.', '2023-11-05', 'Tecnología', 4), -- Escrito por Elena Ramírez
('Ejercicios para mantenerse en forma en casa', 'Rutinas de entrenamiento sin necesidad de ir al gimnasio.', '2023-11-06', 'Salud', 2), -- Escrito por Andrés Pérez
('Consejos de moda para hombres', 'Descubre cómo mejorar tu estilo.', '2023-11-07', 'Moda', 2); -- Escrito por Daniel González


