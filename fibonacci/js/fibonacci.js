"use strict"
var forma = document.getElementById("forma");
var resultado = document.getElementById("resultado");
forma.addEventListener("submit", procesa, false); 

function procesa() {
    var serie = parseInt(forma["serie"].value);
    var num1 = 0;
    var num2 = 1;
    var resp = 0;
    for (var i = 0; i < serie; i++) {
        var numero = num1;
        num1 = num2;
        num2 = numero + num2
        resp +=  "\n"+num2 ;
    }
    forma["resultado"].value = resp;
}

