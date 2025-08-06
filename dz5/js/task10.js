if (confirm('Почати тестування?')) {

    let firstNumb = parseInt(prompt('Загадайте перше число:', '10'));
    let secNumb = parseInt(prompt('Загадайте друге число:', '20'));

    let sum = 0;

    for (let index = firstNumb; index <= secNumb; index++) {
        
        if(index % 2 !== 0) {
            sum = sum + index;
        }
    }
    document.write(`Сума непарних чисел від ${firstNumb} до ${secNumb} = ${sum}`)
}

