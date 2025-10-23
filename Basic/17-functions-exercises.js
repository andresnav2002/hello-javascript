/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
    function suma(a,b){
        return a + b;
    }

    suma(2, 3)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
    function numeros(numero){
        let mayor = numero[0];

        for(let i=1; i < numero.length; i++){
            if(numero[i] > mayor){
                mayor = numero[i]
            }
        }
        return mayor;
    }


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
    function numVocales(texto){
        let contador = 0;
        const vocales = "aeiouAEIOU";
        for(let i = 1; i < texto.length ; i++ ){
            if(vocales.includes(texto[i])){
                contador++;
            }
        }

        return contador;
    }

    
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
    function array(texto){
        texto.toUpperCase();
    }

    array(texto("samuel"))
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
    function sumNum(num){
        let resultado = 0;
        for(let i = 0; i < num.length ; i++){
            if(num[i] % 2 == 0){
                resultado += num[i];
            }
        }

        return resultado;
    }
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado