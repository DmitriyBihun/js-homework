"use strict";
if (confirm('Почати тестування?')) {
    /**
     * Ф-ція створює приклад додавання и перевіряє відповідь.
     *  @returns {void} Функція не повертає значення.
     */
    function askQuestion() {
        let num1 = Math.floor(Math.random() * 10);
        let num2 = Math.floor(Math.random() * 10);
        let res = num1 + num2;
        const input = prompt(`Скільки буде ${num1} + ${num2}`);
        if (input === null)
            alert(`Ви не ввели відповідь.`);
        const userAnswer = Number(input);
        if (res === userAnswer)
            alert('Правильно');
        else
            alert(`Неправильно, правильна відповідь ${res}`);
        setTimeout(askQuestion, 5000);
    }
    askQuestion();
}
