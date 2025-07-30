let firstChildName = prompt("Введіть ім'я першої дитини:", 'Mila')
let candyOfFirstChild = parseFloat(prompt("Введіть к-сть цукерок у першої дитини:", '0'))
let secondChildName = prompt("Введіть ім'я другої дитини:", 'Mark')
let candyOfSecondChild = parseFloat(prompt("Введіть к-сть цукерок у другої дитини:", '0'))

if (candyOfFirstChild > candyOfSecondChild) {
    document.write(`У першої дитини к-сть цукерок більша.`)
}
else if (candyOfFirstChild === candyOfSecondChild) {
    document.write(`У дітей к-сть цукерок однакова.`)
}
else {
    document.write(`У другої дитини к-сть цукерок більша.`)
}
