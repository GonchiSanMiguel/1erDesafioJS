
const suma = function (a,b) {return a + b};
const resta = function (a,b) {return a - b};
const iva21 = x => x * 0.21;

let precioProducto = parseInt(prompt("Ingrese el precio del producto"));
while(precioProducto <= 0){
    alert("El precio debe ser mayor a 0.");
    precioProducto = prompt("Ingrese el precio del producto");
}

let descuento = parseInt(prompt("Ingrese el monto de descuento"));
while(descuento <= 0){
    alert("El precio debe ser mayor a 0.");
    descuento = prompt("Ingrese el monto de descuento");
}

if (precioProducto <= 100){
    alert("El descuento aplica en compras superiores a 100")
    descuento = 0;
} else {
    alert("Tu descuento es válido para esta compra")
}

let precioFinal = resta(suma(precioProducto, iva21(precioProducto)), descuento);


console.log("El precio del producto es: " + precioProducto)
console.log("El IVA de tu compra es: " + iva21(precioProducto))
console.log("Tu descuento es de: " + descuento)
console.log("El precio final de tu compra es: " + precioFinal)





