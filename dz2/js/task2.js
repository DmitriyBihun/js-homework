let userYearOfBirth = parseFloat(prompt('Введіть рік народжееня:', '0'))

let sum = 2025 - userYearOfBirth;

document.write(`
    <h2>Рік народжееня: ${userYearOfBirth} р.</h2>
    <h2>Ваш вік: ${sum}.</h2>

    <span>-----------------------------</span>
    <p>Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.</p>
`)