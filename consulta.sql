USE noticias_db;

-- Obtener todas las noticias con su categoría
SELECT n.id, n.imagen, n.descripcion, n.fecha_subida, c.nombre AS categoria
FROM noticias n
JOIN categorias c ON n.categoria_id = c.id;