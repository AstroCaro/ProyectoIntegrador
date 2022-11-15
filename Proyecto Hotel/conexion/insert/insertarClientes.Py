import mysql.connector
try:
 connection = mysql.connector.connect(host='localhost',
 database='poney_pisador',
 user='root',
 password='')

 mySql_insert_query = """INSERT INTO clientes (nombre, apellido, email, telefono, dni)
 VALUES (%s, %s, %s, %s, %s) """

 records_to_insert = [('claudio', 'teniente', 'claudio@gmail.com', 4791892, 2615411),
                     ('juan', 'teyseidu', 'juanTy@hotmail.com', 4795685, 34859654),
                     ('carolina', 'tissera', 'caro@gmail.com', 3599568, 40199785)]

 cursor = connection.cursor()
 cursor.executemany(mySql_insert_query, records_to_insert)
 connection.commit()
 print(cursor.rowcount, "Record inserted successfully into products table")
except mysql.connector.Error as error:
 print("Failed to insert record into MySQL table {}".format(error))
finally:
 if connection.is_connected():
    cursor.close()
    connection.close()
    print("MySQL connection is closed")
