if (confirm('Почати тестування?')) {

    function getNumberStartsA(array) {
        let count = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i][0] === 'A')
                count++
        }
        return count
    }

    function getNumberStartsAndEndsSame(array) {
        let count = 0;

        for (let j = 0; j < array.length; j++) {
            if (array[j][0] === array[j][array[j].length - 1])
                count++
        }
        return count
    }

    function getNumbersLengthMoreThan5(array) {
        let count = 0;

        for (let k = 0; k < array.length; k++) {
            if (array[k].length > 5)
                count++
        }
        return count
    }

    const someArray = ['NM5768', 'A5872', 'V684207V', 'A6849', 'J007B', 'W010101W', 'L070L', 'O6542N'];
    let numberStartsA = getNumberStartsA(someArray)
    let numberStartsAndEndsSame = getNumberStartsAndEndsSame(someArray)
    let numbersLengthMoreThan5 = getNumbersLengthMoreThan5(someArray)

    document.write(`
        <h3>Результат:<h3>
        <ul>
        <li>Починаються на букву «А»: ${numberStartsA}</li>
        <li>Перша і остання літери співпадають: ${numberStartsAndEndsSame}</li>
        <li>Cкладаються з більше ніш 5 символів: ${numbersLengthMoreThan5}</li>
        </ul>`)

}

