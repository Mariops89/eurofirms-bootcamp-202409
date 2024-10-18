console.log('TEST Array.prototype.at')

console.log('CASE get element at index 2')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined,
    function () { return 'hello world' }]
var element = things.at(2)
console.log(element)
//hola mundo

console.log('CASE get element at index 3')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined,
    function () { return 'hello world' }]
var element = things.at(3)
console.log(element)
// {a:1, b:2, c:3 }

console.log('CASE get element at offset -1')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined,
    function () { return 'hello world' }]
var element = things.at(-1)
console.log(element)
//function () {return 'hello world' }
console.log(element())
//hello world

console.log('CASE get element at offset -3')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined,
    function () { return 'hello world' }]
var element = things.at(-3)
console.log(element)
//null

console.log('CASE get element at 1000')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined,
    function () { return 'hello world' }]
var element = things.at(1000)
console.log(element)
//undefined

console.log('CASE get element at -1000')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined,
    function () { return 'hello world' }]
var element = things.at(-1000)
console.log(element)
//undefined


//Mi ejemplo

//console.log('CASE return the element in position of parameter function')
console.log('My example: CASE get element at index 2 and offset -2')

var arr = [100, 200, 300]
//          0    1    2
//         -3   -2   -1

var index = 2

console.log(arr.at(index))
//300

index = -2

console.log(arr.at(index))