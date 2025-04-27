
// Escribir una función clousure que 
// aumente un contador en 1 cada vez que la función se llame
function contador() {
    let count = 0; // Variable privada

    return function() {
        count++; // Incrementar el contador
        return count; // Devolver el valor actual del contador
    }
}
// Crear una instancia del contador
const incrementar = contador();
// Llamar a la función varias veces
console.log(incrementar()); // 1
console.log(incrementar()); // 2
console.log(incrementar()); // 3
console.log(incrementar()); // 4
console.log(incrementar()); // 5
