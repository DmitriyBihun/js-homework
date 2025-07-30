const minNumber = 1
const maxNumber = 5
let randomNum = Math.floor(Math.random() * 5) + 1;
let userNumber = parseInt(prompt("Введіть число від 1 до 5:", '1'))

if(userNumber >= 1 && userNumber <= 5) {

    if (randomNum === userNumber) {
        document.write(`<h2>Вітаю, ви вгадали.</h2>`)
    }
    else {
        userNumber = parseInt(prompt("Остання спроба. Спробуйте ще раз. Число від 1 до 5:", '1'))

        if (userNumber >= 1 && userNumber <= 5) {
            if (randomNum === userNumber) {
                document.write(`<h2>Вітаю ви вгадали.</h2>`)
            }
            else {
                document.write(`<h2>Поразка. Загадане число було ${randomNum}</h2>`)
            }
        }
        else {
            document.write(`<h2>Число має бути в діапазоні від 1 до 5. Game over.</h2>`)
        }
    }
}
else {
    document.write(`<h2>Число має бути в діапазоні від 1 до 5. Game over.</h2>`)
}

