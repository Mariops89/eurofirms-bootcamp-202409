/*
    array.reverse()

    invertir el orden de las propiedades-> EJEMPLO  -> numbers [0] = 3
*/

function reverseElement(object) {
    var result = {}
    // repetir tantas veces -> 2 <-
    // apartar la ultima propiedad y cambiarla por la primera
    // apartar la propiedad anterior a la ultima y cambiarla por la siguiente a la primera
    for (var i = object.length - 1; i > (object.length - 1) / 2; i--) {
        // i = 5 - 1 -> i = 4 // 5 - 1 = 4 / 2 = 2 -> 4 > 2 -> haciendo operaciones
        // i = 3 // 2 -> 3 > 2 -> seguimos haciendo operaciones
        // i = 2 // 2 -> 2 > 2 -> parar de hacer operaciones
        // i = 3 - 1 -> i = 2 // 3 - 1 = 2 / 2 = 1 -> 2 > 1 -> hacemos operaciones
        // i = 1 // 1 -> 1 > 1 -> parar de hacer operaciones
        // var apartar = numbers[4] // numbers[4] = 0 // numbers[0] = apartar 
        // var apartar = numbers[3] // numbers[3] = 1 // numbers[1] = apartar 
        var apartar = object[i]

        object[i] = object[object.length - 1 - i]

        object[object.length - 1 - i] = apartar
    }
    return object//numbers invertido
}

var sports = {
    0: 'football',
    1: 'basketball',
    2: 'dodgeball',
    length: 3
}

var numbers = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    length: 5
}

// RESULTADO ESPERADO -> numbers = {
//     0: 4,
//     1: 3,
//     2: 2,
//     3: 1,
//     4: 0,
//     length: 5
// }
console.log('numbers before reversion', numbers)

console.log('numbers reversed', reverseElement(numbers))






// Mi propuesta



function reverseElement_prop(object) {
    for (var i = 0; i <= object.length / 2; i++) {
        var guardar = object[i];
        object[i] = object[object.length - i];
        object[object.length - i] = guardar;


    }
    return object;
}


var fridge = {
    0: 'meat',
    1: 'salad',
    2: 'wine',
    3: 'burrito',
    length: 4
}

console.log(reverseElement_prop(fridge));