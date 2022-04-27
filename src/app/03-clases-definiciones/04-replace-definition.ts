import { SuperHeroe } from './extra/classes';

/*
    Objetivo:
        Cambiar únicamente la refencia de SuperHeroe a Heroe
        OJO!: Pero no reemplazar los strings

    Tips:
        Replace Symbol
        F2

    (Cesar) Es muy comun que nosotros tengamos que hacer un replace o renombrar
    alguna variable y la forma tradicional es utilizar la forma tradicional que traen
    todos los editores.
    Que es seleccionar la variable o nombre y presionar Ctrl + Ship + f y aparecen todas
    las coincidencias.

    Caso 1: Entonces una forma es seleccionar el nombre del constructor y presionar
        f2 y despues teclear el nuevo nombre. y hay que prestar atencion a lo que hace 
        porque quiza y eso no es lo que queremos ya que como tal solo cambia ese nombre en todos 
        los lugares en donde se este utilizando ese constructor pero este no los cambia en las
        importaciones.

    Caso 2: Otro Ejemplo. Es porejemplo renombrar la clase ya que a lo mejor el nombre de la clase
        va a cambioar. Entonces nos vamos a nuestro archivo donde esta la definicion de nuestra clase, 
        seleccionamos el nombre de nuestra clase y presionamos f2 y a continuacion tecleamos el nuevo nombre 
        y lo que hace es que cambia el nombre de la clase y en todos los lugares donde se esta invacando
        el constructor, cambia el nombre y tambien cambia el nombre en donde esten las importaciones.
    
    NOTA. Si despues de hacer el replace abre otros archivos, es porque esos archivos sufrieron modificaciones
        debido al replace, es algo asi como para decirnos que hubo modificaciones y que hay revisarlos..

*/


const wolverine = new SuperHeroe();
const ironman   = new SuperHeroe();
const spiderman = new SuperHeroe();

function saludar() {
    return 'El SuperHeroe Wolverine es genial!';
}

function gritar() {
    return 'El SuperHeroe en este string no se debe de cambiar';
}

