let second = parseFloat(prompt('Введіть кількість секунд, що пройшла від початку доби:', '0'))
const SECOND_IN_HOUR = 3600
const SECOND_IN_MINUTE = 60

let hours = Math.floor(second / SECOND_IN_HOUR)
const remainingSecond = second % SECOND_IN_HOUR
const minutes = Math.floor(remainingSecond / SECOND_IN_MINUTE)

document.write(`
    <h3>Кількість секунд, що пройшла від початку доби = ${second}</h3>
    <h3>Кількість годин = ${hours}</h3>
    <h3>Кількість хвилин = ${minutes}</h3>
    <span>-----------------------------</span>
    <p>Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.</p>
`)