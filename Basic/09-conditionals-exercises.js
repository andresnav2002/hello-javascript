/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
    let contraseña = "1234";
    let usuario = "admin";

    if(contraseña == "1234" && usuario == "admin"){
        console.log("Puedes ingresar")
    }
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
    let numero = 10;

    if(numero > 0){
        console.log("Es positivo")
    }
    else if(numero < 0){
        console.log("negativo")
    }
    else{
        console.log("es cero")
    }
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

    const edad = true;
    edad ? console.log("es mayor") : console.log("es menor");
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
    let saludo = 3;
    let respuesta
    switch(saludo){
        case 1: 
            respuesta = "hello"
        break
        case 2: 
            respuesta = "que onda"
        break
        case 3: 
            respuesta = "hola"
        break
        default:
            respuesta = "Numero ingresado incorrecto"
    }

    console.log(respuesta)
// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7