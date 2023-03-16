var num1 = 100;
var num2 = 2;
var numPri = [];
for(; num2 < num1; num2++){
  if(primo(num2)){
    numPri.push(num2);
    }
  }
  console.log(numPri);
  function primo(numero) {
    for(var i=2; i < numero; i++){
      if(numero % i === 0){
        return false;
        }
      }
      return numero !== 1;
    }
