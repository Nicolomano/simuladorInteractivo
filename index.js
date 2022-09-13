let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;
function calculo(a) {
    return gastoTotal + a;
}
alert('Ingrese el valor de los productos (se sumaran hasta ingresar un valor igual o menor a 0 o un valor no numerico)');

function ingreso() {
    precioProducto = parseInt(prompt('Ingrese el precio del producto' + (contador + 1) + ':'));
    
    while (precioProducto > 0) {
        gastoTotal = calculo(precioProducto);
        contador++
        precioProducto = Number(prompt('Ingrese el precio del producto' + (contador + 1) + ':'));
    }   
    if (precioProducto <= 0 || isNaN(precioProducto));
}

function total() {
    alert('cantidad de productos: ' + contador);
    alert('TOTAL: ' + gastoTotal);
}
ingreso();
total();