// Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir entre 0";
        }
        return num1 / num2;
    } else {
        return "Error: Operación no válida";
    }
}

// Ciclo while para múltiples operaciones
while (true) {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar:");

    // Si el usuario quiere salir
    if (operacion.toLowerCase() === "salir") {
        alert("Gracias por usar la calculadora. ¡Hasta luego!");
        break;
    }

    // Realizar operación y mostrar resultado
    let resultado = realizarOperacion(num1, num2, operacion.toLowerCase());
    alert("El resultado es: " + resultado);
}
