let userAge = parseInt(prompt(`Вік користувача:`, '18'))

if(userAge >= 0 && userAge <= 100) {

    if (userAge <= 6) {
        document.write(`<h2>Малюк.</h2>`)
    }
    else if (userAge >= 7 && userAge <= 16) {
        document.write(`<h2>Школяр.</h2>.`)
    }
    else if (userAge >= 17 && userAge <= 25) {
        document.write(`<h2>Студент.</h2>.`)
    }
    else if (userAge >= 26 && userAge <= 60) {
        document.write(`<h2>Працівник.</h2>.`)
    }
    else   {
        document.write(`<h2>Пенсіонер.</h2>.`)
    }
}
else {
    document.write(`<h2>Некоректне значення віку.</h2>`)
}

