import mysql.connector
try:
 connection = mysql.connector.connect(host='localhost',
 database='poney_pisador',
 user='root',
 password='')
 mySql_Create_Table_Query = """ CREATE TABLE poney_pisador.habitaciones (
    id_habitacion INT NOT NULL PRIMARY KEY,
    fk_categoria INT NOT NULL,
    costo DECIMAL NOT NULL,
	FOREIGN KEY (fk_categoria) REFERENCES poney_pisador.categorias (id_categoria)
);"""
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

