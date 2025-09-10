if (confirm('Почати тестування?')) {

    /**
     * Ф-ція створює приклад додавання и перевіряє відповідь.
     *  @returns {void} Функція не повертає значення.
     */

    function askQuestion(): void {

        let num1: number = Math.floor(Math.random() * 10)
        let num2: number = Math.floor(Math.random() * 10)
        let res: number = num1 + num2

        const input: string | null = prompt(`Скільки буде ${num1} + ${num2}`);

        if (input === null) alert(`Ви не ввели відповідь.`)

        const userAnswer: number = Number(input)

        if (res === userAnswer) alert('Правильно')
        else alert(`Неправильно, правильна відповідь ${res}`)

        setTimeout(askQuestion, 5000)
    }

    askQuestion()
}