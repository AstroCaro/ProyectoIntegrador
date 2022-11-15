import mysql.connector
try:
 connection = mysql.connector.connect(host='localhost',
 database='poney_pisador',
 user='root',
 password='')
 mySql_query = "select * from clientes"
 cursor = connection.cursor()
 cursor.execute(mySql_query)

 rows=cursor.fetchall()
 for row in rows:
     print(row)

 cursor.close()
except mysql.connector.Error as error:
    print("Failed to insert record into MySQL table {}".format(error))
finally:
    if connection.is_connected():
        connection.close()
        print("MySQL connection is closed") 
