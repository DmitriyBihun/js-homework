if (confirm('Почати тестування?')) {

    let evenNum = 0
    let oddNum = 0

    for (let i = 1; i <= 100; i++) {
        
        let num = Math.floor(Math.random() * 1000) + 1;

        if (num % 2 === 0) {
            evenNum++
        }
        else {
            oddNum++
        }
    }
    if (evenNum > oddNum) {
        document.write(`<h2>Кількість парних чисел: ${evenNum} більше</h2>`)
    }
    else {
        document.write(`<h2>Кількість непарних чисел: ${oddNum} більше</h2>`)
    }
}