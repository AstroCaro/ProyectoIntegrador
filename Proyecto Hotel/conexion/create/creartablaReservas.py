import mysql.connector
try:
 connection = mysql.connector.connect(host='localhost',
 database='poney_pisador',
 user='root',
 password='DrRamon.1625')
 mySql_Create_Table_Query = """ CREATE TABLE poney_pisador.reservas (
    id_reserva INT NOT NULL PRIMARY KEY auto_increment,
    fecha_ingreso DATE NOT NULL,
    fecha_egreso DATE NOT NULL,
    fk_habitacion INT NOT NULL,
    fk_cliente INT NOT NULL,
    estado BOOLEAN NOT NULL,
    FOREIGN KEY (fk_cliente) REFERENCES poney_pisador.clientes (id_cliente),
	FOREIGN KEY (fk_habitacion) REFERENCES poney_pisador.habitaciones (id_habitacion)
); """

 cursor = connection.cursor()
 result = cursor.execute(mySql_Create_Table_Query)
 print("tabla productos creada con éxito,,!! ")
except mysql.connector.Error as error:
 print("Failed to create table in MySQL: {}".format(error))
finally:
 if connection.is_connected():
    cursor.close()
    connection.close()
    print("MySQL connection is closed")