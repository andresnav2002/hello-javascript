/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
    let persona = {
        name : "Samuel",
        age : 22,
        alias : "samu"
    }
// 2. Accede y muestra su valor
    console.log(persona.name)
// 3. Agrega una nueva propiedad
    persona.email = "samnava@gmail.com"
// 4. Elimina una de las 3 primeras propiedades
    delete persona.age
// 5. Agrega una función e invócala
     persona.work = function () {
    console.log(`La persona llamada ${this.name} trabaja con dedicación.`);
};

persona.work();
// 6. Itera las propiedades del objeto
for(let key in persona){
    console.log(persona[key])
}
// 7. Crea un objeto anidado
    let persona2 = {
        name: "Paola",
        age : 23,
        work: function(){
            console.log("Ella trabaja")
        },
        job:{
            lugar: "caribe",
            tiempo: function(){
                console.log("Ella lleva 1 mes")
            }
        }
    }
// 8. Accede y muestra el valor de las propiedades anidadas
    console.log(persona2.job)
// 9. Comprueba si los dos objetos creados son iguales
    console.log(persona === persona2)
// 10. Comprueba si dos propiedades diferentes son iguales
    console.log(persona.name === persona2.name)
    console.log(persona.age === persona2.age)