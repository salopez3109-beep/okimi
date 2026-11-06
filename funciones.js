function CalcularPrecio(PrecioUnitario, cantidad) {
    const total =PrecioUnitario * cantidad;
    return total;
}

console.log(CalcularPrecio(5,2));
console.log(CalcularPrecio(3,4));
console.log(CalcularPrecio(7,1));

function puedeReservar(cantidad) {
    if (cantidad <=2) {
        return true;
    } else {
        return false;
    }
}
