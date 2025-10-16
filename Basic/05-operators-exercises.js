/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
    let a = 2;
    let b = 2;

    let suma = a + b;
    let resta = a- b;
    let mult = a * b;
    let div = a / b;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
    let myVariable = 2;
    console.log(myVariable)
    myVariable += 2;
    console.log(myVariable);
    myVariable -= 1;
    console.log(myVariable)


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

    let objeto = "mesa";
    let numero = 10;

    console.log(mesa == mesa);
    console.log(10 > 5)
    console.log(1 <= 1)
    console.log(a===a)
    console.log(10 != 5)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
    console.log(b == a)
    console.log(0 == "a")
    console.log(2 != a)
    console.log(b === a)
    console.log(100 < 10)


// 5. Utiliza el operador lógico and
    console.log(2 > 1 && 10 == 10)

// 6. Utiliza el operador lógico or
    console.log(2 < 0 || a != b)

// 7. Combina ambos operadores lógicos
    console.log(2 == 2 || 4 < 5 && "hola" != 2)

// 8. Añade alguna negación
    console.log(!(2 > 4 || 10 === a))

// 9. Utiliza el operador ternario
const trafico = true;
trafico ? console.log("Si hay") : console.log("No hay")

// 10. Combina operadores aritméticos, de comparáción y lógicas

let c = 2;
let d = 2;
let resultado = c + d;

console.log( resultado == 4 || resultado != 2)