function realizarOperacion(operacion) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const opTexto = {
    suma: "+",
    resta: "-",
    multiplicacion: "×",
    division: "÷"
  };

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").innerText = "Por favor ingresa ambos números.";
    document.getElementById("operacion-realizada").innerText = "";
    return;
  }

  let resultado;

  if (operacion === "suma") {
    resultado = num1 + num2;
  } else if (operacion === "resta") {
    resultado = num1 - num2;
  } else if (operacion === "multiplicacion") {
    resultado = num1 * num2;
  } else if (operacion === "division") {
    if (num2 === 0) {
      document.getElementById("resultado").innerText = "Error: División por cero.";
      document.getElementById("operacion-realizada").innerText = `${num1} ÷ ${num2}`;
      return;
    }
    resultado = num1 / num2;
  } else {
    resultado = "Operación no válida.";
  }

  document.getElementById("operacion-realizada").innerText = `${num1} ${opTexto[operacion]} ${num2}`;
  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}

function limpiar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").innerText = "";
  document.getElementById("operacion-realizada").innerText = "";
}
