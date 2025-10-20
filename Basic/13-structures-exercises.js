/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

    let animales = ["jirafa",  "mono", "ballena", "gallina", "perro"]

    console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final

    animales.push("gato")
    animales.unshift("vaca")
// 3. Elimina el que se encuentra en tercera posición
    animales.slice(2,1)
// 4. Crea un set que almacene cinco libros
    let libros = new mySet;
    mySet = (["mate", "idioma", "romeo y julieta", "encantdo", "amor"]);
    

// 5. Añade dos más. Uno de ellos repetido
    libros.add("mate");
    libros.add("Juan");
// 6. Elimina uno concreto a tu elección
    libros.delete("Juan")
// 7. Crea un mapa que asocie el número del mes a su nombre
    let myMap = new Map();

    myMap = new Map([
        [1, "Enero"],
        [2, "Febrero"],
        [3, "Marzo"],
        [4, "Abril"],
        [5, "Mayo"]
    ])
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano
    myMap.set("age", "22")
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
    const nombres = ["juan", "samuel", "samuel", "marcos", "paola"];
    const setNombres = new Set(nombres);

    const mapa = new Map();
    mapa.set("nombresUnicos", setNombres);
    console.log(mapa.get("nombresUnicos"));

