import mysql.connector
try:
    connection = mysql.connector.connect(host='localhost', database='poney_pisador', user='root', password='')
    mySql_insert_query = """INSERT INTO categorias (nombre)
VALUES (%s) """
    records_to_insert = [('Habitacion Doble'),
                     ('Habitación Simple')]
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