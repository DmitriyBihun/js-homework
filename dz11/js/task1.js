if (confirm('Почати тестування?')) {

    const getRandRow = (elCount, min, max) => Array.from({ length: elCount }, () => min + Math.floor(Math.random() * (max - min + 1)))

    const getRandMatrix = (rowCount, colCount, min, max) => Array.from({ length: rowCount }, () => getRandRow(colCount, min, max))

    let arr = getRandMatrix(6, 6, 1, 10)

    console.log(arr);
    
    let sum = 0;
    // 1. номери рядків від 0 до половини, стовпці від 0 до половини
    for (let rowIndex = 0; rowIndex < arr.length / 2; rowIndex++) {
        for (let colIndex = 0; colIndex < (arr[rowIndex].length) / 2; colIndex++) {
            sum += arr[rowIndex][colIndex]
        } 
    }
    document.write(`<strong>Номери рядків від 0 до половини, стовпці від 0 до половини:</strong> ${sum}<br>`)

    let sum2 = 0;
    // 2. номери рядків від 0 до половини, стовпці від половини до кінця
    for (let rowIndex = 0; rowIndex < arr.length / 2; rowIndex++) {
        for (let colIndex = arr[rowIndex].length / 2; colIndex < arr[rowIndex].length; colIndex++) {
            sum2 += arr[rowIndex][colIndex]
        }
    }
    document.write(`<strong>Номери рядків від 0 до половини, стовпці від половини до кінця:</strong> ${sum2}<br>`)

    let sum3 = 0;
    // 3. номери рядків від половини до кінця, стовпці від 0 до половини
    for (let rowIndex = arr.length / 2; rowIndex < arr.length; rowIndex++) {
        for (let colIndex = 0; colIndex < arr[rowIndex].length / 2; colIndex++) {
            sum3 += arr[rowIndex][colIndex]
        }
    }
    document.write(`<strong>Номери рядків від половини до кінця, стовпці від 0 до половини:</strong> ${sum3}<br>`)

    let sum4 = 0;
    // 4. номери рядків від половини до кінця , стовпці від половини до кінця
    for (let rowIndex = arr.length / 2; rowIndex < arr.length; rowIndex++) {
        for (let colIndex = arr[rowIndex].length / 2; colIndex < arr[rowIndex].length; colIndex++) {
            sum4 += arr[rowIndex][colIndex]
        }
    }
    document.write(`<strong>Номери рядків від половини до кінця , стовпці від половини до кінця:</strong> ${sum4}<br>`)

    let sum5 = 0;
    // 5. Суму парних рядків
    for (let rowIndex = 0; rowIndex < arr.length; rowIndex += 2) {
        for (let colIndex = 0; colIndex < arr[rowIndex].length; colIndex++) {
            sum5 += arr[rowIndex][colIndex]
        }
    }
    document.write(`<strong>Сумa парних рядків:</strong> ${sum5}<br>`)

    let sum6 = 0;
    // 6. Суму непарних рядків
    for (let rowIndex = 1; rowIndex < arr.length; rowIndex += 2) {
        for (let colIndex = 0; colIndex < arr[rowIndex].length; colIndex++) {
            sum6 += arr[rowIndex][colIndex]
        }
    }
    document.write(`<strong>Сумa непарних рядків:</strong> ${sum6}<br>`)

    let sum7 = 0;
    // 6. У парних рядках – непарні стовпці, у непарних – парні
    for (let rowIndex = 0; rowIndex < arr.length; rowIndex ++) {
        for (let colIndex = 0; colIndex < arr[rowIndex].length; colIndex++) {
            if ((rowIndex % 2 !== 0 && colIndex % 2 === 0) || (rowIndex % 2 === 0 && colIndex % 2 !== 0))
                sum7 += arr[rowIndex][colIndex]
        }
    }
    document.write(`<strong>У парних рядках – непарні стовпці, у непарних – парні:</strong> ${sum7}<br>`)
}



