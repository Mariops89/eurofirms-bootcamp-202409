/*
    array.shift()
    elimina el primer elemento, lo devuelve y modifica la longitud

*/

function removeFirstElement(object) {
    //guardar el valor de la propiedad a elminar
    var result = object[0]
    // mover las demas propiedades
    for (var i = 0; i < object.length - 1; i++) {
        object[i] = object[i + 1]
    }
    // elminar la ultima propiedad
    delete object[object.length - 1]
    // actualizar la propiedad length
    object.length--
    // devolver el valor eliminado
    return result
}

var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}

console.log('numbers before shift', numbers)
console.log('first element of numbers', removeFirstElement(numbers))
console.log('numbers after shift', numbers)
console.log('first element of numbers after second shift', removeFirstElement(numbers))
console.log('numbers after 2 shifts', numbers)