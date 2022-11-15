import mysql.connector
try:
    connection = mysql.connector.connect(host='localhost', database='poney_pisador', user='root', password='')
    mySql_insert_query = """INSERT INTO reservas (fecha_ingreso, fecha_egreso, fk_habitacion, fk_cliente, estado)
VALUES (%s, %s, %s, %s, %s) """
    records_to_insert = [('2022-11-14', '2022-12-04', 1, 1, True),
                     ('2022-10-13', '2022-12-20', 1, 1, True)]
    cursor = connection.cursor()
    cursor.executemany(mySql_insert_query, records_to_insert)
    connection.commit()
    print(cursor.rowcount, "Record inserted successfully into RESERVAS table")
except mysql.connector.Error as error:
    print("Failed to insert record into MySQL table {}".format(error))
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")
