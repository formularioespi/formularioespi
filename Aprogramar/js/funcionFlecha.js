let nombre = function (parametro){
    //codigo a ejecutar
}

let funcionFlecha = () => {
    console.log('Esto es desde una funcion flecha');
    return ' una flecha'
}

/* let recuperarDato = funcionFlecha();
console.log(funcionFlecha());

let recuperarDato2 = funcionFlecha();
console.log('esto es: '+ recuperarDato2+' roja');*/

//Reducir el codigo cuando la funcion en el cuerpo solo usa una linea
const funcionSimple = () => console.log('Esto es posible por que solo contiene una linea de codigo');
funcionSimple ();

//Si la funcion solo va a recibir un unico parametro no es necesario usar los ()
const funcionEsperaParam = texto  => console.log(texto);
funcionEsperaParam ('Pasame un argumento a la funcion flecha');

//Funcion flecha con varios parametros, si nesecitamos hacer calculos complejos o usar mas de una linea se recomienda hacerlo entre {} y usar return.
/*const funcionSuma = (dato1, dato2) => dato1 + dato2;
console.log(funcionSuma (10,5));*/

const funcionSumar = (dato1, dato2) => {
    let resultado = (dato1 + dato2) * 5 ** 2;
    return resultado; 
}
console.log(funcionSumar(10,5));

//Reducir el codigo cuando la funcion tiene una sola linea y retora un valor.
const funcionRetornoValor = () => "Esto es pocible por que solo contiene una linea de codigo,no es necesario usar return.";
console.log(funcionRetornoValor());

//Regresar un objeto
const regresarObjeto = () => ({nombre: "Juan", apellido: "Perez"});
console.log(regresarObjeto());