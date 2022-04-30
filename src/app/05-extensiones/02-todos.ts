//Necesitamos tener instalada la siguiente extendion.
//https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight
// y tambien
//https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree

/*
Despues de haber instalado estas extensiones, en el 
sidebar de visual studio code, nos van a aparecer otro icono de seccion
de un arbol con una paloma adentro como icono.
Y si lo abrimos nos van a aparecer todas las palabras TODO que viene de la 
palabra to do(hacer).

Esto nos va a ayudar a no olvidar donde nos quedamos en cierto punto
de el codigo o si hay tareas que resolver.

NOTA. Podemos agregarlo como un snipper con el siguiente json.

"mostrar todo": {
		"prefix": "todo",
		"body": [
			"// TODO: ",
		],
		"description": "Mostrar el log en la o consulta"
	},
"mostrar fixme": {
		"prefix": "fixme",
		"body": [
			"// FIXME: ",
		],
		"description": "Mostrar el log en la o consulta"
	}

NOTA. Es probable que si nosotros tenemos los modulos de node, 
nos aparecescan incluso los todo que puedan tener esos modulos, 
entonces para que solo nos aparescan los todo que nosotros pongamso
hay que hacer unas configuraciones con los siguientes pasos.

1.- Nos vamos a preferencias.
2.- Presionamos en Settings.
3.- Estando en el menu de Settings, vamos a hacer click en Extensions
4.- Buscamos el Todo tree.
5.- Ahora nos vamos a Exclude Globs, y presionamos "Edit in Settings.json"
6.- Estando en el archivo json, vamos a agregar el siguiente json para exluir
	por carpetas.

// 	"todo-tree.filtering.excludeGlobs": [
//     "**/node_modules/**",
//     "**/vendor/**",
//     "**/bower_components/**",
//     "**/dist/**"
//   ]




*/

// TODO Highlight
// Todo Tree
// TODO y FIXME

// TODO: Tengo que crear el codigo aqui.

// FIXME: Corregir el problema de la funcion.