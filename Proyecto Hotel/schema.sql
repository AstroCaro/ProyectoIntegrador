CREATE DATABASE poney_pisador;
CREATE TABLE poney_pisador.clientes (
    id_cliente INT NOT NULL PRIMARY KEY auto_increment,
    nombre VARCHAR (50) NOT NULL,
    apellido VARCHAR (50) NOT NULL,
    email VARCHAR (50) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    dni INT NOT NULL
);

CREATE TABLE poney_pisador.categorias (
    id_categoria INT NOT NULL PRIMARY KEY auto_increment,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE poney_pisador.habitaciones (
    id_habitacion INT NOT NULL PRIMARY KEY,
    fk_categoria INT NOT NULL,
    costo DECIMAL NOT NULL,
	FOREIGN KEY (fk_categoria) REFERENCES poney_pisador.categorias (id_categoria)
);

CREATE TABLE poney_pisador.reservas (
    id_reserva INT NOT NULL PRIMARY KEY auto_increment,
    fecha_ingreso DATE NOT NULL,
    fecha_egreso DATE NOT NULL,
    fk_habitacion INT NOT NULL,
    fk_cliente INT NOT NULL,
    estado BOOLEAN NOT NULL,
    FOREIGN KEY (fk_cliente) REFERENCES poney_pisador.clientes (id_cliente),
	FOREIGN KEY (fk_habitacion) REFERENCES poney_pisador.habitaciones (id_habitacion)

);