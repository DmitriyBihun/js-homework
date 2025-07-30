let productPrice = parseFloat(prompt(`Ціна товару`, '3000'))
let userMoney = parseFloat(prompt(`К-сть грошей`, '5000'))

if(productPrice >= userMoney) {
    document.write(`<h2>Відмова. Не вистачає ${productPrice - userMoney} грн.</h2>`)
}
else {
    document.write(`<h2>Погоджено. Також можете купити лотерею за 4 грн.</h2>`)
}