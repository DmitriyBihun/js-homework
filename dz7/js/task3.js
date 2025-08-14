if (confirm('Почати тестування?')) {

    function getAddOfNumb(n1, n2, n3, n4) {
        return n1 + n2 + n3 + n4
    }
    function getProductOfNumb(n1, n2, n3, n4) {
        return n1 * n2 * n3 * n4
    }
    function getAverageOfNumb(n1, n2, n3, n4) {
        let sum = n1 + n2 + n3 + n4
        return sum / 4
    }
    function getMinOfNumb(n1, n2, n3, n4) {
        let min = n1;

        if (n2 < min) min = n2;
        if (n3 < min) min = n3;
        if (n4 < min) min = n4;

        return min
    }

    let number1 = parseFloat(prompt('Введіть перше число:', '5'))
    let number2 = parseFloat(prompt('Введіть друге число:', '7'))
    let number3 = parseFloat(prompt('Введіть третє число:', '3'))
    let number4 = parseFloat(prompt('Введіть четвете число:', '2'))

    let sumAdd = getAddOfNumb(number1, number2, number3, number4)
    document.write(`Сума чисел дорівнює: ${sumAdd} <br>`)

    let sumProduct = getProductOfNumb(number1, number2, number3, number4)
    document.write(`Добуток чисел дорівнює: ${sumProduct} <br>`)

    let average = getAverageOfNumb(number1, number2, number3, number4)
    document.write(`Середнє арифметичне дорівнює: ${average} <br>`)

    let minNumber = getMinOfNumb(number1, number2, number3, number4)
    document.write(`Мінімальне значення дорівнює: ${minNumber}`)
}

