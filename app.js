function fibonacci(limit) {
    /* Se declaran dos variables iniciales que son las que van a servir para hacer el fibonacci */
    let numAnt = 0,  /* Es el numero anterior */
        numActu = 1; /* Seria el numero actual  */

        /* Mostramos el 0 antes de iniciar el bucle */
        console.log(numAnt);
    
    
    /* Usamos el bucle, cada vez que el numero actual es menor o igual al limite puesto */
    while (numActu <= limit) {
        console.log(numActu);
        let numSiguiente = numAnt + numActu; 
        numAnt = numActu; 
        numActu = numSiguiente;
    }
}

// Ejemplos de uso:
console.log("Primer entrada # 3");
fibonacci(3);
console.log("--------------------------");
console.log("Segunda entrada # 10");
fibonacci(10);
