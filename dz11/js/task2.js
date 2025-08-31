if (confirm('Почати тестування?')) {

    const getRandRow = (elCount, min, max) => Array.from({ length: elCount }, () => min + Math.floor(Math.random() * (max - min + 1)))

    const getRandMatrix = (rowCount, colCount, min, max) => Array.from({ length: rowCount }, () => getRandRow(colCount, min, max))

    let arr = getRandMatrix(5, 7, 50, 300)

    document.write(`<strong>Початковий масив:</strong><br>`)

    document.write(`<table border='1px'>`)
    for (const row of arr) {
        document.write(`<tr>`)
        for (const num of row) {
            document.write(`<td>${num}</td>`)
        }
        document.write(`</tr>`)
    }
    document.write(`</table>`)

    //=================================================================================================================

    document.write(`<strong>1. 3агальний прибуток кожного масиву за тиждень:</strong><br>`)
    for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) {
        let rowSum = 0;
        for (let colIndex = 0; colIndex < arr[rowIndex].length; colIndex++) {
            rowSum += arr[rowIndex][colIndex]
        }
        document.write(`Прибуток за ${rowIndex + 1} тиждень: ${rowSum}<br>`)
    }
    //=================================================================================================================

    document.write(`<strong>2. 3агальний прибуток усіх магазинів по дням:</strong><br>`)
    for (let colIndex = 0; colIndex < arr[0].length; colIndex++) {
        let daySum = 0;
        for (let rowIndex = 0; rowIndex < arr.length; rowIndex++) {
            daySum += arr[rowIndex][colIndex]
        }
        document.write(`Прибуток за ${colIndex + 1} день: ${daySum}<br>`)
    }
    //=================================================================================================================

    let sumWorkDays = 0;
    for (const row of arr) {
        for (let colIndex = 0; colIndex < 5; colIndex++) {
            sumWorkDays += row[colIndex]
        }
    }
    document.write(`<strong>3. Загальний прибуток за робочі дні:</strong> ${sumWorkDays}<br>`)
    //=================================================================================================================

    let sumweekendDays = 0;
    for (const row of arr) {
        for (let colIndex = 5; colIndex < 7; colIndex++) {
            sumweekendDays += row[colIndex]
        }
    }
    document.write(`<strong>4. загальний прибуток за вихідні дні:</strong> ${sumweekendDays}<br>`)
    //=================================================================================================================

    let maxWednesdayNumb = -Infinity;
    for (const row of arr) {
        if (row[2] > maxWednesdayNumb) maxWednesdayNumb = row[2]
    }
    document.write(`<strong>5. Mаксимальний прибуток за середу:</strong> ${maxWednesdayNumb}<br>`)
    //=================================================================================================================

    const numbListMore200 = arr.flat().filter(numb => numb > 200);
    document.write(`<strong>6. Cписок зі значенням, які що більші за 200:</strong> ${numbListMore200}<br>`)
    //=================================================================================================================

    document.write(`<strong>7. Відсортувати кожен тиждень за зростанням:</strong><br>`)
    for (const row of arr) {
        row.sort((a, b) => a - b)
    }
    document.write(`<table border='1px'>`)
    for (const row of arr) {
        document.write(`<tr>`)
        for (const num of row) {
            document.write(`<td>${num}</td>`)
        }
        document.write(`</tr>`)
    }
    document.write(`</table>`)
    //=================================================================================================================

    document.write(`<strong>8. Відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні
                рядків потрібно порівнювати максимальні елементи у кожному з цих рядків:</strong><br>`)
    const sortArray = arr.sort((a, b) => {
        if (Math.max(...a) < Math.max(...b)) return 1
        if (Math.max(...a) > Math.max(...b)) return -1
        return 0
    })
    document.write(`<table border='1px'>`)
    for (const row of sortArray) {
        document.write(`<tr>`)
        for (const num of row) {
            document.write(`<td>${num}</td>`)
        }
        document.write(`</tr>`)
    }
    document.write(`</table>`)
    //=================================================================================================================

    document.write(`<strong>9. Упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба
                знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти
                раніше)</strong><br>`)
    let sumRow = row => row.reduce((prevSum, num) => prevSum + num, 0)
    arr.sort((a, b) => {
        if (sumRow(a) < sumRow(b)) return 1;
        if (sumRow(a) > sumRow(b)) return -1;
        return 0
    })
    document.write(`<table border='1px'>`)
    for (const row of arr) {
        document.write(`<tr>`)
        for (const num of row) {
            document.write(`<td>${num}</td>`)
        }
        document.write(`</tr>`)
    }
    document.write(`</table>`)

}



