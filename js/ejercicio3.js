let numUsuario = prompt ("ingrese un numero del  te diremos si es multiplo de 5");

let operacion = numUsuario % 5;

if (operacion==0) {
    document.write (`el numero ${numUsuario} SI es multiplo de 5  `);
}
else {
    document.write (`el numero ${numUsuario} NO es multiplo de 5  `);
}

