/*
Sintaxis - funcion

funcion nombre (parametros, parametros,,,{
    //Codigo a ejecutar
    cosole.log(algo); //no se toma como un valor retornado
    return algo; //si se toma como un valor retornado. Significa que de el otro lado alguin recibira un dato.
}

*/
function traeDelSuper(producto,producto2){
    console.log(" La compra fue exitosa");
    return `Te compre ${producto} y tambien ${producto2}`;
}

let hijo = traeDelSuper("pan","leche");
console.log(hijo);

let tio = traeDelSuper("sal","vino");
console.log(tio);

tio = traeDelSuper("queso","pan");
console.log(tio);

