### INSTRUCCIONES PARA UTILIZAR LA API

## POSTS

# OBTENER TODOS LOS POSTS

 - Para poder obtener todos los post, se debe de utilizar el verbo "GET" junto con la URL: http://localhost:3000/api/posts

 # OBTENER UN POST ESPECÍFICO

 - Para obtener un post específico, se debe de utilizar el verbo "GET" junto con la URL: http://localhost:3000/api/posts/POSTID. Siendo el "POSTID" el id del post que se quiere recuperar en formato número.

 # CREAR UN NUEVO POST

- Para crear un nuevo post, se debe de utilizar el verbo "POST" junto con la URL: http://localhost:3000/api/posts. junto con esto se le debe de pasar en el body la siguiente información en formato Json: titulo, descripcion, categoria y autores_id.

# ACTUALIZAR UN POST EXISTENTE

- Para actualizar un post, se debe de utilizar el verbo "PUT" junto con la URL: http://localhost:3000/api/posts/POSTID. Siendo el "POSTID" el id del post que se quiere modificar en formato número. junto con esto,se le debe de pasar en el body la siguiente información en formato Json: titulo, descripcion, categoria y autores_iD modificados.

# BORRAR UN POST EXISTENTE

- Para eliminar un post, se debe de utilizar el verbo "DELETE" junto con la URL: http://localhost:3000/api/posts/POSTID. Siendo el "POSTID" el id del post que se quiere eliminar en formato número. 

## AUTORES

# OBTENER TODOS LOS AUTORES

 - Para poder obtener todos los autores, se debe de utilizar el verbo "GET" junto con la URL: http://localhost:3000/api/autores

 # OBTENER UN AUTOR QUE INTEGRE TODOS LOS POSTS RELACIONADOS AL MISMO

 - Para poder obtener un autor y que integre todos los posts relacionados al mismo, se debe utilizar el verbo "GET" junto con la URL: http://localhost:3000/api/autores/posts/AUTORID. Siendo el "AUTORID" el id del autor que se quiere recuperar en formato número.

 # OBTENER UN AUTOR ESPECÍFICO

 - Para obtener un autor específico, se debe de utilizar el verbo "GET" junto con la URL: http://localhost:3000/api/autores/AUTORID. Siendo el "AUTORID" el id del autor que se quiere recuperar en formato número.

 # CREAR O DAR DE ALTA UN NUEVO AUTOR

- Para crear un nuevo autor, se debe de utilizar el verbo "POST" junto con la URL: http://localhost:3000/api/autores. junto con esto se le debe de pasar en el body la siguiente información en formato Json: nombre, email e imagen (la URL).

# ACTUALIZAR UN AUTOR EXISTENTE

- Para actualizar un autor, se debe de utilizar el verbo "PUT" junto con la URL: http://localhost:3000/api/autores/AUTORID. Siendo el "AUTORID" el id del autor que se quiere modificar en formato número. junto con esto,se le debe de pasar en el body la siguiente información en formato Json: nombre, email e imagen (la URL), modificados.

# BORRAR UN POST EXISTENTE

- Para eliminar un autor, se debe de utilizar el verbo "DELETE" junto con la URL: http://localhost:3000/api/autores/AUTORID. Siendo el "AUTORID" el id del autor que se quiere eliminar en formato número. 
