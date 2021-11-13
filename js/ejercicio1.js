let numero = prompt ("ingrese un numero del 1 al 30");

if (numero>10 && numero<=31) {
    document.write("el numero que ingresaste es mayor a 10");

}

else if (numero<=10) {
    document.write ("el numero que ingreso es menor o igual a 10");
    
}

else {
    document.write ("no ingresaste un numero o  es mayor a 30");
}