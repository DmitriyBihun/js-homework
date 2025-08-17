if (confirm('Почати тестування?')) {

    function getRandomNumbers(min, max) {
        return (min + Math.floor(Math.random() * (max - min + 1)))
    }

    function getNumbersArray(count, min, max) {
        let array = []
        for (let i = 0; i < count; i++) {
            array.push(getRandomNumbers(min, max))
        }
        return array;
    }

    const payments = getNumbersArray(12, 1000, 7500)
    document.write(`<h2>Платежі за рік: ${payments}<h2>`)

    let totalYear = 0;
    let totalFirstHalf = 0;
    let totalSecondHalf = 0;
    let totalSummer = 0;
    let totalSecondQuarter = 0;
    let totalEvenMonths = 0;
    let totalSeasonStart = 0;

    for (let i = 0; i < payments.length; i++) {
        totalYear += payments[i];

        if (i < 6) {
            totalFirstHalf += payments[i]
        }
        else {
            totalSecondHalf += payments[i]
        }
        if (i >= 5 && i <= 7) {
            totalSummer += payments[i]
        }
        if (i >= 3 && i <= 5) {
            totalSecondQuarter += payments[i]
        }
        if (i % 2 === 0) {
            totalEvenMonths += payments[i]
        }
        if (i === 0 || i === 2 || i === 5 || i === 8 || i === 11) {
            totalSeasonStart += payments[i]
        }
    }

    document.write(`Cумарно за рік: ${totalYear}<br>`)
    document.write(`Cумарно за | половину року: ${totalFirstHalf}<br>`)
    document.write(`Cумарно за || другу року: ${totalSecondHalf}<br>`)
    document.write(`Cумарно за літо: ${totalSummer}<br>`)
    document.write(`Cумарно за || квартал: ${totalSecondQuarter}<br>`)
    document.write(`Cумарно за парні місяці: ${totalEvenMonths}<br>`)
    document.write(`Cумарно а місяці, які є початковими у сезоні: ${totalSeasonStart}`)

}


