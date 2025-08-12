// Función para validar si un valor es un número válido
function esNumValido(valor) {
    const numero = Number(valor);
    
    // Verifica: no sea NaN, no infinito y no vacío
    return !isNaN(numero) && isFinite(numero) && valor.toString().trim() !== '';
}

// Función para convertir temperaturas
function conv(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;
    
    return {
        fahrenheit: fahrenheit,
        kelvin: kelvin
    };
}

// Función para mostrar resultados en el DOM
function mostrarRes(celsius, fahrenheit, kelvin) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="success">✅ Conversión exitosa:</div>
        <div class="result-item">🔵 Temperatura original: ${celsius}°C</div>
        <div class="result-item">🟡 Grados Kelvin: ${kelvin}</div>
        <div class="result-item">🔴 Grados Fahrenheit: ${fahrenheit}</div>
    `;
}

// Error
function mostrarErr(mensaje) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<div class="error">❌ ${mensaje}</div>`;
}

// FConvertir con el input del DOM
function convertirTemperatura() {
    const input = document.getElementById('celsius');
    const valorIngresado = input.value;
    
    if (!esNumValido(valorIngresado)) {
        mostrarErr("Por favor ingresa un número válido. Ejemplo: 25 o -10 o 0");
        input.focus();
        return;
    }
    
    const celsius = Number(valorIngresado);
    const resultado = conv(celsius);
    mostrarRes(celsius, resultado.fahrenheit, resultado.kelvin);
}

// PRESIONA Enter en el input
document.getElementById('celsius').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        convertirTemperatura();
    }
});