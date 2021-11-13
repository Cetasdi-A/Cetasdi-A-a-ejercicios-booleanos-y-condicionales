let numeroUsuario = prompt ("escriba un número");

let multiplo5 = numeroUsuario % 5;
let multiplo3 = numeroUsuario % 3;

if (multiplo5 == 0 && multiplo5 != multiplo3) {
    document.write ("es multiplo de 5");
}

else if (multiplo3 ==0 && multiplo3 != multiplo5)  {
document.write ("es multiplo de 3")  ;  
}
else if (multiplo5 == multiplo3 && numeroUsuario !=2) {
    document.write ("Múltiplo de 3 y de 5");
}
 
    
else {
     document.write ("no es multiplo de 3 ni de 5");
 }