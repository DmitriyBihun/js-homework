let firstItemPrice = parseFloat(prompt('Введіть ціну першого товару:', '0'))
let firstItemQuantity = parseFloat(prompt('Введіть кількість першого товару:', '0'))
let secondItemPrice = parseFloat(prompt('Введіть ціну другого товару:', '0'))
let secondItemQuantity = parseFloat(prompt('Введіть кількість другого товару:', '0'))
let thirdItemPrice = parseFloat(prompt('Введіть ціну третього товару:', '0'))
let thirdItemQuantity = parseFloat(prompt('Введіть кількість третього товару:', '0'))

let worthOfFirstItem = firstItemPrice * firstItemQuantity
let worthOfSecondItem = secondItemPrice * secondItemQuantity
let worthOfThirdItem = thirdItemPrice * thirdItemQuantity
let totalWorth = worthOfFirstItem + worthOfSecondItem + worthOfThirdItem;

document.write(`
    <h3>Товар 1: ${firstItemQuantity} x ${firstItemPrice} = ${worthOfFirstItem} грн.</h3>
    <span>-----------------------------</span>
    <h3>Товар 1: ${secondItemQuantity} x ${secondItemPrice} = ${worthOfSecondItem} грн.</h3>
    <span>-----------------------------</span>
    <h3>Товар 1: ${thirdItemQuantity} x ${thirdItemPrice} = ${worthOfThirdItem} грн.</h3>
    <span>-----------------------------</span>
    <h2>Загальна вартість товарів = ${totalWorth} грн.</h2>
    <span>-----------------------------</span>
    <p>З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
</p>
`)