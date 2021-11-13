let peso= prompt ("ingrese su peso utilizando el PUNTO para un número decimal");
let altura= prompt ("ingrese su estatura utilizando el PUNTO para un número decimal ");

let operacion1= (altura)*(altura);
let resultado= (peso)/(operacion1);
 if (resultado<= 18.5) {
     document.write ("Bajo de peso" );
 } 
 else if (resultado>=18.6 && resultado <=24.9 ) {
     document.write ( "tu peso es normal");

 }
 else if (resultado>=25 && resultado <=29.9) {
     
 document.write ("estas en sobrepeso");
     
 }

 else if (resultado>=30) {
     document.write ("estas obeso");
     
 }

 else {
     document.write ("no ingresaste valores válidos");
 }
 