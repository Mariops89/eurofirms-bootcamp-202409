/*
    array.unshift
*/

function addFirstElement(object, element) {
    //empujar los elementos existentes 1 posición adelante
    for (var i = object.length; i > 0; i--) {
        // numbers -> { 0: 0, 1: 1, 2: 2, length: 3}
        // i = 3 -> 3 > 0 -> numbers[3]= 2 -> numbers { 0: 0, 1: 1, 2: 2, 3: 2 } -> i-- -> i = 2
        // i = 2 -> 2 > 0 -> numbers[2]= 1 -> numbers { 0: 0, 1: 1, 2: 1, 3: 2 } -> i-- -> i = 1
        // i = 1 -> 1 > 0 -> numbers[1]= 0 -> numbers { 0: 0, 1: 0, 2: 1, 3: 2 } -> i-- -> i = 0
        // i = 0 -> 0 > 0 -> exit loop -> numbers  { 0: 0, 1: 0, 2: 1, 3: 2 } 
        object[i] = object[i - 1]
    }
    //añadimos el elemento -> element <- en la primera posición -> object[0] <- en el objeto -> object <-
    //numbers[0] = 111

    object[0] = element

    //actualizar y delvolver el nuevo length -> object.length <-

    object.length++

    return object.length
}

var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}
/* numbers[0] = 111

numbers {
    0: 111,
    1:1,
    2:2,
    length:3
}*/

// //resultado esperado de addFirstElement(numbers,111)

// numbers = { //rosana , efren, mario, tead, luis f
//     0: 111,
//     1: 0,
//     2: 1,
//     3: 2,
//     length: 4
// }
console.log('numbers antes de añadir 111', numbers)



console.log('longitud despues de añadir 111', addFirstElement(numbers, 111))

console.log('numbers despues de añadir 111', numbers)



console.log('longitud despues de añadir 222', addFirstElement(numbers, 222))

console.log('numbers despues de añadir 222', numbers)
