/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

//инструкция (statement)
15

// инструкция (statement)
const myObject = {
  x: 10,
  y: true,
}

// expression statement
myObject.z = 'abc'

//expression statement
delete myObject.x

//statement
let newVariable

//expression statement
newVariable = 30 + 5

//expression statement
console.log(newVariable)

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)
}
