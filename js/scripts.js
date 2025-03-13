let mensaje =document.getElementById("mensajito")
console.log(mensaje.innerText);

let variable; //declara una variable vacia

variable = 1.666; //asigana un valor

console.log("El tipo de dato es : "+typeof variable); //conocer tipo de dato de una variable
console.log("El valor del dato es :"+variable); //conocer valor de variable

variable = false // asigna un valor a la variable 
console.log("El tipo de dato es : "+typeof variable); //conocer tipo de dato de una variable
console.log("El valor del dato es :"+variable); //conocer valor de variable

variable = "Hola mundo" // asigna un valor a la variable 
console.log("El tipo de dato es : "+typeof variable); //conocer tipo de dato de una variable
console.log("El valor del dato es :"+variable); //conocer valor de 

function calcular(sumando1,sumando2,salida){
let sumando1_obj = document.getElementById("sumando1");
let sumando2_obj = document.getElementById("sumando2");

let calculo = (parseFloat(sumando1_obj.innerText) + parseFloat(sumando2_obj.innerText));

document.getElementById(salida).innerHTML = calculo;

}

function crearElemento(url= null){
    if (url!==null){
        url == url
    }
    else{
        url = "https://as2.ftcdn.net/jpg/01/09/00/83/220_f_109008395_OQDupHMza1V6CNOzrJwWaklaktT4IsRW.jpg"
    }
    let objetoimagen = document.crearElemento("img");
    objetoimagen.id = "imagencreada";
    objetoimagen.src = url;
    objetoimagen.alt = "Icono sobre control de videojuego";
    objetoimagen.title = "Control de videojuego";
    objetoimagen.width =220;
    objetoimagen.height = 165;
    objetoimagen.addEventListener('click', function(){
        objetoimagen.src = "https://encrypted-tbn0.gstatic.com/image?q=tbn:ANd9GcTku5595AC-bbsoPF-Ik0WzUbVj9rnAbs91kw&s";
        objetoimagen.width = 225;
        objetoimagen.height = 225;
    });
    document.getElementById('lienzo').appendChild(objetoimagen);
}