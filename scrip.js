function CalcularPrecio(PrecioUnitario, cantidad) {
    const total =PrecioUnitario * cantidad;
    return total;
}

//function puedeReservar(cantidad) {
 //   return cantidad <=2;
//}
function puedeReservar(cantidad) {
   return cantidad >0;
}

const botonReservar = document. querySelector("#boton-reservar"); // se defime ;las varibles que vamos a usar
const contadorTazas = document. querySelector("#contador-tazas");

botonReservar.addEventListener("click", function(){
 const tazasActuales = Number (contadorTazas.textContent);

 if (puedeReservar(tazasActuales)){
    contadorTazas.textContent = tazasActuales -1; // le resta una taza
 }  else {
    botonReservar.textContent= "sin cupo";
    botonReservar.disabled = true;  // contador 
  
 }
});
