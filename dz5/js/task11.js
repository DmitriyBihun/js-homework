if (confirm('Почати тестування?')) {

    let firstNumb = parseInt(prompt('Загадайте перше число:', '10'));
    let secNumb = parseInt(prompt('Загадайте друге число:', '20'));

    let sum = 0;
    let countNumbers = 0;

    let currentNumb = Math.min(firstNumb, secNumb)
    let maxNumb = Math.max(firstNumb, secNumb)

    do {
        if (currentNumb % 2 !== 0) {
            sum = sum + currentNumb
            countNumbers++
        }
        currentNumb++
    }
    while (countNumbers < 5 && currentNumb <= maxNumb);
    document.write(`Сума перших 5 непарних чисел між ${firstNumb} та ${secNumb} = ${sum}`);
}

