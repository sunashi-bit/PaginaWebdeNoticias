CREATE DATABASE noticias_db;
USE noticias_db;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imagen VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_subida DATETIME DEFAULT CURRENT_TIMESTAMP,
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE CASCADE
);