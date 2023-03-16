"use strict"
var forma = document.getElementById("forma");
var resultado = document.getElementById("resultado");
forma.addEventListener("submit", procesa, false);

function procesa(){
try{
    var numero = parseInt(forma["numero".value]);
    var resultado;
    var num1;
    var num2;
    num1 = valida(!isNaN(numero), "El valor" +
    "debe ser un numero.");
    forma["resultado"].value=num1;

    num2 = valida(numero < 0, "El valor" + 
    "no puede ser un numero negativo.");
    forma["resultado"].value=num2;

    resultado = Math.sqrt(numero);
    forma["resultado"].value=resultado;
    }catch (e) {
        var res=e.massage;
        forma["resultado"].value=res;
    }

}