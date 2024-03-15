## <h1 align="center"> THE CLOSET </h1>

<h4 align="center">
:construction: Proyecto en construcción :construction:
</h4>

"The closet" consiste en un sitio web de comercio electrónico de ropa, con enfoque en una experiencia intuitiva y atractiva. Ofrece una amplia variedad de productos, con navegación fácil, búsqueda avanzada y personalización. El equipo desarrolló tanto frontend como backend con tecnologías modernas, incluyendo diseño responsivo y seguridad. El objetivo es proporcionar una experiencia excepcional de compra, centrada en el usuario y respaldada por tecnología moderna.

## :hammer:Funcionalidades del proyecto

- `Auth de terceros integrada`: Utilizamos NextAuth y creamos los modelos de Cuentas y Usuarios con Prisma y MongoDB para habilitar el Registro / Login de usuarios mediante credenciales y mediante Google.
- `Pasarela de pagos`: Para la pasarela de pagos, integramos Mercado Pago, una plataforma de pagos en línea confiable y segura. Utilizamos la API de MP para gestionar transacciones de pago, permitiendo a los usuarios realizar compras de manera segura mediante tarjetas de crédito, débito u otros métodos de pago admitidos por MP. Implementamos la lógica necesaria en el backend para procesar y registrar las transacciones, garantizando una experiencia de compra fluida y segura para los usuarios.
- `Filtros combinados`: Para implementar filtros combinados en el sitio web, utilizamos Redux junto con React para gestionar el estado de la aplicación de manera eficiente. Utilizamos Redux para almacenar y gestionar los filtros seleccionados por el usuario, lo que nos permite aplicar múltiples criterios de filtrado de forma simultánea en los resultados de búsqueda o catálogo de productos.
- `Dashboard Admin`: Para implementar un panel de administración (dashboard admin), utilizamos tecnologías como React para el frontend y Node.js con Express para el backend. Utilizamos Firebase Authentication para autenticar a los administradores y autorizar el acceso al panel de administración. En el frontend, creamos una interfaz de usuario intuitiva y fácil de usar que permite a los administradores gestionar productos, categorías, pedidos, usuarios y otras funcionalidades administrativas. En el backend, desarrollamos endpoints API seguros que permiten a los administradores realizar operaciones CRUD (crear, leer, actualizar, eliminar) en la base de datos, así como también gestionar la autenticación y autorización de usuarios.
- `Notificaciones (mail/socket.io)`: Utilizamos un servicio de correo electrónico como SendGrid o Nodemailer para enviar notificaciones por correo electrónico a los usuarios. Además, implementamos Socket.IO para ofrecer notificaciones en tiempo real que se entregan instantáneamente a los usuarios conectados al sitio web. Esto puede incluir notificaciones de nuevos mensajes, actualizaciones de inventario o cambios en el estado de los pedidos.
- `Borrado logico`: Para implementar el borrado lógico en el sitio web, utilizamos una estrategia que consiste en marcar los registros como "eliminados" en lugar de eliminarlos físicamente de la base de datos. Esto nos permite mantener un historial completo de los datos y recuperarlos fácilmente si es necesario en el futuro.

## :white_check_mark: Tecnologias utilizadas

- JavaScript
- Nextjs
- Nodejs
- Mongodb

## Autores

| [<img src="https://avatars.githubusercontent.com/u/119123840?v=4" width=115><br><sub>Joao Peter Bone Pena</sub>](https://github.com/peterjbone) | [<img src="https://avatars.githubusercontent.com/u/71423470?v=4" width=115><br><sub>NicolasDelPozo</sub>](https://github.com/NDelPozo) | [<img src="https://avatars.githubusercontent.com/u/49510922?v=4" width=115><br><sub>Walter Moreyra</sub>](https://github.com/Wallmoreyra) | [<img src="https://avatars.githubusercontent.com/u/111025964?v=4" width=115><br><sub>Abril</sub>](https://github.com/Abril31) | [<img src="https://avatars.githubusercontent.com/u/129472389?v=4" width=115><br><sub>Pablo Girardi</sub>](https://github.com/pablogirardi) |
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
