let mensaje = document.getElementById("mensajito");
console.log(mensaje.textContent);

let variable;

variable = 1.666;
console.log("El tipo de dato es: " + typeof variable);
console.log("El valor del dato es: " + variable);

variable = false;
console.log("El tipo de dato es: " + typeof variable);
console.log("El valor del dato es: " + variable);

variable = "Hola mundo";
console.log("El tipo de dato es: " + typeof variable);
console.log("El valor del dato es: " + variable);

function calcular(sumando1, sumando2, salida) {
    let sumando1_obj = document.getElementById(sumando1);
    let sumando2_obj = document.getElementById(sumando2);

    let calculo = parseFloat(sumando1_obj.textContent) + parseFloat(sumando2_obj.textContent);

    document.getElementById(salida).textContent = calculo;
}

function crearElemento(url = null) {
    if (url === null) {
        url = "https://as2.ftcdn.net/jpg/01/09/00/83/220_f_109008395_OQDupHMza1V6CNOzrJwWaklaktT4IsRW.jpg";
    }
    
    let objetoimagen = document.createElement("img");
    objetoimagen.id = "imagencreada";
    objetoimagen.src = url;
    objetoimagen.alt = "Icono sobre control de videojuego";
    objetoimagen.title = "Control de videojuego";
    objetoimagen.width = 220;
    objetoimagen.height = 165;

    objetoimagen.addEventListener("click", function () {
        objetoimagen.src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
        objetoimagen.width = 225;
        objetoimagen.height = 225;
    });

    document.getElementById("lienzo").appendChild(objetoimagen);
}
