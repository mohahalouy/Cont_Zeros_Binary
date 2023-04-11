const convertBinary = num => num.toString(2);

const contMaxZero = (num) => {
    const numBinary = convertBinary(num)
    const numBinaryStr = numBinary.toString();
    const digits = numBinaryStr.split("");

    let countZeros = 0;
    let numMaxZeros = 0;

    for (const digit of digits) {
        if (parseInt(digit) === 1) {
            numMaxZeros = Math.max(numMaxZeros, countZeros);
            countZeros = 0;
        } else {
            countZeros++
        }
    }


    return numMaxZeros;
}


console.log(contMaxZero(545))
