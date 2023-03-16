//Es una funcion callback por que recibe como parametro una funcion
function comprar (articulo1, articulo2, funcion) {
    articulo1 = 65;
    articulo2 = 70;
    let gastado = articulo1 + articulo2;
funcion (gastado);
}

function imprimir (mensaje) {
    console.log(`Compramos leche y pan - gastamos: ${mensaje}`);
}

comprar ('leche', 'pan', imprimir);