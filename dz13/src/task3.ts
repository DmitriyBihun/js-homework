if (confirm('Почати тестування?')) {

    /**
     * Створює ітератор для чисел (місяців) від min до max. Кожен виклик повертає наступне число у діапазоні, після досягнення max наступне значення повертається до min.
     * @param min {number} - Початковий місяць.
     * @param max {number} - Кінцевий місяць.
     * @returns - Функція-ітератор, яка при кожному виклику повертає наступний місяць.
     */
    function createIterator(min:number, max:number):() => number {
        let curr:number = min;

        return function():number {
            let value:number = curr;
            curr++;
            if(curr > max ) {
                curr = min;
            }
            return value;
        }
    }

    const monthIterator = createIterator(1, 12)

    for (let i = 0; i < 17; i++) {
        document.write(`${monthIterator()}<br>`)
    }
}