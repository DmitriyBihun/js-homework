if (confirm('Почати тестування?')) {

    let array = []
    for (let row = 0; row < 6; row++) {
        array.push(Array.from({ length: 6 }, () => 0))
    }

    for (let i = 0; i < 5; i++) {
        let row, col;
        do {
            row = Math.floor(Math.random() * 6);
            col = Math.floor(Math.random() * 6);
        } while (array[row][col] !== 0);
        array[row][col] = 1
    }

    let shipCount = 0;
    let shots = 10;

    while (shipCount < 5 && shots > 0) {
        let userShotX = parseInt(prompt(`Введіть кoординату Х:`, '0'));
        let userShotY = parseInt(prompt(`Введіть кoординату Y:`, '0'));
        if (array[userShotY][userShotX] === 1) {
            shipCount++;
            array[userShotY][userShotX] = 'X';
            shots--
            alert(`Влучив. Залишилось ${5 - shipCount} кораблів.`)
        }
        else if (array[userShotY][userShotX] === 0) {
            array[userShotY][userShotX] = 'О';
            shots--;
            alert(`Промах! Залишилось ${shots} снарядів.`);
        }
        else {
            alert(`Тут вже стріляли. Спробуй іншу клітинку.`);
        }
    }

    if (shipCount === 5) {
        alert(`Ви перемогли. Вітаю.`)
    }
    else {
        alert(`Ви програли. Не всі кораблі були потоплені.`)
    }

    document.write(`X — потоплений корабель<br>
        О — промах<br>
        1 — не потоплений корабель<br>
        0 — порожня клітинка<br><br>`)
    
    for (let row = 0; row < array.length; row++) {
        document.write(array[row].join(' ') + '<br>')
    }
}