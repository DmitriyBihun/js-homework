let randomMonthNum = Math.floor(Math.random() * 12) + 1;
let randomDayNum = Math.floor(Math.random() * 7);
let sum = randomMonthNum + randomDayNum;

document.write(`
    <h3>Місяць = ${randomMonthNum}</h3>
    <h3>День = ${randomDayNum}</h3>
    <h3>Сума чисел = ${sum}</h3>
    <span>-----------------------------</span>
    <p>Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).</p>
`)