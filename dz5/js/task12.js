if (confirm('Почати тестування?')) {

    let sum = 0; 

    for (let i = 1; i <= 12; i++) {
        let temp = parseFloat(prompt(`Введіть температуру ${i} місяця:`, ''));
        sum = sum + temp
    }

    let averageTemp = parseFloat((sum / 12).toFixed(2))

    document.write(`Середня температура за рік = ${averageTemp} градусів за Цельсієм.`)

}

