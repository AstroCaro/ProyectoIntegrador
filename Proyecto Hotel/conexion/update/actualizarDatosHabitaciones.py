import mysql.connector
try:
 connection = mysql.connector.connect(host='localhost',
 database='poney_pisador',
 user='root',
 password='')
 mySql_insert_query = " UPDATE habitaciones SET costo=10000 WHERE id_habitacion=2;"

 cursor = connection.cursor()
 cursor.execute(mySql_insert_query)
 connection.commit()
 print(cursor.rowcount, "registro(s) actualizado")
except mysql.connector.Error as error:
 print("Failed to delete record into MySQL table {}".format(error))
finally:
 if connection.is_connected():
    cursor.close()
    connection.close()
    print("MySQL connection is closed")