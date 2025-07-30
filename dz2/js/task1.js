let a = parseFloat(prompt('Введіть перше число:', '0'))
let b = parseFloat(prompt('Введіть друге число:', '0'))

let sum = a + b;
let multiplication = a * b;
let div = a / b;

document.write(`
    <h2>Результат</h2>
    <br>
    <table border=2px>
        <tr>
            <th>Дія</th>
            <th>Результат</th>
        </tr>
        <tr>
            <th>Сума</th>
            <td>${sum}</td>
        </tr>
        <tr>
            <th>Добуток</th>
            <td>${multiplication}</td>
        </tr>
        <tr>
            <th>Частка</th>
            <td>${div}</td>
        </tr>
    </table>
    <span>-----------------------------</span>
    <p>Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці.</p>
`)