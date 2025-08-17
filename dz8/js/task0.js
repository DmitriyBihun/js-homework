if (confirm('Почати тестування?')) {

    const arrOfNames = ['Дмитро', 'Іван', 'Павло', 'Андрій', 'Євген', 'Олександр', 'Іван', 'Орест', 'Петро', 'Іван',];

    function getIvanCount() {
        let count = 0;

        for (let i = 0; i < arrOfNames.length; i++) {
            if (arrOfNames[i] === 'Іван') {
                count++
            }
        }
        return count
    }
    const result = getIvanCount()

    document.write(`<h2>К-сть імен "Іван" у масиві: ${result}</h2>`)
} 


