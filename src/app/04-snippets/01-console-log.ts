

/*
(CESAR)
Un sniper es un pedazo de codigo que nosotros le podemos
decir a visual studio que nos lo genere, por ejemplo
en javascript utilzamos mucho el
console.log("Hola mund.")

etnonces para ya no andar teclando caracter por caracter, 
simplemente tecleamos cl y presionamos tab, y nos va a poner 
el pedazo de codigo.

POr lo genear para crear este snipper, vamos a menu, 
seleccionamos "Preferencia." y presionamos
en "Use Snipper" y buscamos el lenguaje al cual yo le quiero
agregar el snipper

En este caso elegimos el lenguage de typescript y pegamos el 
siguiente objeto json.
Si le prestamos atencion a $, ahi lo que estamos diciendo, 
es que cuando presione tab, el cursor va aparecer seleccionando
la cadena de "Hola mundo", y con el $2, decimos que cuando teclemos
otro tab, el cursor va a aparecer abajo.
Todo esto esta comentado en el archivo de visual studio.

"mostrar log": {
		"prefix": "clg",
		"body": [
			"console.log(${1:'Hola mundo'});",
			"$2"
		],
		"description": "Mostrar el log en la o consulta"
	}

Despues regresamos a esta pantalla y tecleamos clg y automaticamente
visual studio lo va a reconocer, y despues presionams la tecla tab.

ESTOS CON PARA PODER CODIFICAR MUCHO MAS RAPIDO.
*/

console.log('Hola mundo');

console.log('Hola mundo');

console.log('Hola mundo');
// Ejemplo final
console.log('hola mundo');


console.log('Hola mundo');


export class SuperHeroe {
 
    constructor() {
//	holamundo
    }
}