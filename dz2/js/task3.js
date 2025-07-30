let priceOfProd = parseFloat(prompt('Введіть ціну товару:', '0'))
let numOfProd = parseFloat(prompt('Введіть кількість товарів:', '0'))
const VAT = 5

let totalPrice = priceOfProd * numOfProd;
const vatValue = (totalPrice * VAT) / 100;
let finalPrice = totalPrice + vatValue;


document.write(`
    <h2>Ціна товару: ${priceOfProd} грн.</h2>
    <h2>Кількість товарів: ${numOfProd} шт.</h2>
    <h2>Сума з ПДВ (5%): ${finalPrice} грн.</h2>

    <span>-----------------------------</span>
    <p>Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).</p>
`)