const input = document.getElementById('inputNum');

const convertBinary = num => num.toString(2);

// Función principal para contar los ceros binarios.
const contMaxZero = () => {
    const num = parseInt(document.getElementById('inputNum').value)
    const numBinary = convertBinary(num);
    const digits = Array.from(numBinary);

    let countZeros = 0;
    let numMaxZeros = 0;

    // Se recorre el array de dígitos y se cuentan los ceros consecutivos.
    for (const digit of digits) {
        if (parseInt(digit) === 1) {
            // Si se encuentra un 1, se actualiza el número máximo de ceros consecutivos.
            numMaxZeros = Math.max(numMaxZeros, countZeros);
            countZeros = 0;
        } else {
            // Si se encuentra un 0, se incrementa el contador de ceros consecutivos.
            countZeros++
        }
    }

    document.getElementById('converted-data').textContent = numMaxZeros;
};

input.addEventListener('input', contMaxZero);

input.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        contMaxZero();
    }
});