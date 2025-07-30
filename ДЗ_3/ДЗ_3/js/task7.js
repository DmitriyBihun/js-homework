let monthNum = parseInt(prompt(`Введіть номер місяця 1-12:`, '1'))
let season

if(monthNum === 1 || monthNum === 2 || monthNum === 12) {
    season = `Зима`
}
else if (monthNum >= 3 && monthNum <= 5) {
    season = `Весна`
}
else if (monthNum >= 6 && monthNum <= 8) {
    season = `Літо`
}
else if (monthNum >= 9 && monthNum <= 11) {
    season = `Осінь`
}
else {
    season = `Введено некоректні дані.`
}

document.write(`<h2>Пора року: ${season}</h2>`)