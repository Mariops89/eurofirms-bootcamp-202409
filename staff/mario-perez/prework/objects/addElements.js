/*
    añadir varios elementos 
*/

function addElements(object) {
    // buscar la ultima posicion para añadir a partir de ella
    // añadir los elementos que estan en el array arguments
    // recorriendo el array arguments añado tantos elementos cuantos tenga
    // cantidad de elementos a añadir es arguments.length - 1
    for (var i = 1; i < arguments.length; i++) {
        //asigno el elemento en la posicion i en la variable element
        var element = arguments[i]
        //añado una nueva posicion en el objeto donde introduzco el valor de la varable element
        object[object.length] = element
        //incrementar la propiedad longitud
        object.length++
    }

}

var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}

console.log('CASO 1 -> añadir 3 y 4 a numbers')

addElements(numbers, 3, 4)

console.log('resultado esperado -> { 0: 0, 1: 1, 2: 2 ,3: 3, 4: 4 , length: 5 }', numbers)

