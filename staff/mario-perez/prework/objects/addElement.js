/*
function array.push()
añade en la ultima posicion del array un elemento

*/
function addElement(object, element) {
    //nuestra función añadirá dentro del objeto -> object <- en la última posicion -> object.length <-  el elemento -> element <-
    object[object.length] = element
    //incrementar la longitud -> object.length <- en 1
    object.length++
}
var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}

console.log('PRUEBA 1 : añadir el numero 3 a numbers')

addElement(numbers, 3)

console.log('numbers', numbers)

console.log('Resultado esperado -> { 0:0, 1:1 , 2: 2, 3:3 , length: 4}')

addElement(numbers, 100)

console.log('numbers ', numbers)