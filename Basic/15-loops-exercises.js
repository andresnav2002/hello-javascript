/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
    for(let i = 0; i <= 20 ; i++){
        console.log(`${i}`)
    }
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
    let resultado = 0;  
    for(let i = 1; i<101; i++){
        
        resultado += i;
        console.log(resultado)
        }
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
        for(let i= 0; i<=50 ; i++){
            if(i % 2 == 0){
                console.log(i);
            }
        }
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
        let nombres = ["samuel", "juan", "jose"]

        for(let value of nombres){
            console.log(value);
        }
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
        const cadena = "Hola Samuel";
        for(cadena = 0; cadena.length; i++){
            console.log(cadena);
        }
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
        let numeros = [1, 2, 3, 4]
        let mult = 1;
        for(let value of numeros){
            
            mult *= value;
            
        }
        console.log(mult)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
        for(let i= 0; i<=10 ; i++){
            let tabla = 0;
            tabla *= i;
            console.log(tabla);
        }
// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10