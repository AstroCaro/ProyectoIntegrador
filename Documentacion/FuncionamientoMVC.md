A continuacion se detalla que realiza cada vista de la pagina, como interactua con los controladores y la respectiva tabla de la base de dato:
  La vista Contacto solicita datos personales al usuario que son guardados en una tabla llamada contactos a traves del controlador ContactoController, que sirven para hacer consultas al administrador de la pagina.
  La vista Registro solicita datos personales al usuario que son guardados en una tabla llamada Clientes a traves del controlador ClienteController, estos datos sirvan para futuros logueos.
  La vista Login solicita nick de usuario registrado y su respectiva contraseña que son verificadas de una tabla llamada Clientes a traves del controlador ClienteController para poder administrar los datos y reservas del usuario.
  La vista Reservas solicita las fechas en la cual se efectuara la reserva que son guardadas en una tabla llamada Reservas a traves del controlador ReservaController, y sirven tanto para saber si hay lugar y/o habitacion disponible como para confirmar la reserva.
  La vista Panel Administrador consta de 4 vistas mas llamadas:
    Vista de Habitaciones concede al administrador permisos de modificar datos, precios y fotos de las habitaciones a traves del controlador HabitacionController y modifican los datos que hay en la tabla Habitacion.
    Vista Categorias concede al administrador cambiar entre los diferentes tipos de habitacion a travez del controlador CategoriaController al soliciutar los datos qu se encuentran en la tabla Categorias.
    Vista de Clientes concede al administrador permisos de ver, modificar o actualizar y eliminar datos de las clientes a traves del controlador ClienteController, modificando los datos que hay en la tabla Clientes.
    Vista de Reservas concede al administrador permisos de ver, modificar o actualizar y eliminar datos de las reservas a traves del controlador ReservaController, modificando los datos que hay en la tabla Reservas.
