USE noticias_db;

INSERT INTO categorias (nombre) VALUES
('Tecnología'),
('Deporte'),
('Salud'),
('Educación'),
('Espectáculos'),
('Tendencias'),
('Social');

INSERT INTO noticias (imagen, descripcion, categoria_id) VALUES
('imagen1.jpg', 'Descripción de la noticia 1', 1),
('imagen2.jpg', 'Descripción de la noticia 2', 2),
('imagen3.jpg', 'Descripción de la noticia 3', 3);