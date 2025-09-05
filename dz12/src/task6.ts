if (confirm('Почати тестування?')) {

    const arrayOfNames: string[] = ['Irina', 'Mykola', 'Denys', 'Oleksandr', 'Oleg', 'Dmytro', 'Borys', 'Oksana', 'Petro', 'Olga', 'Viktoriya'];

    document.write(`<strong>Масив імен:</strong> [${arrayOfNames}]<br>`);

    let changed: boolean;

    do {
        changed = false
        for (let i = 1; i < arrayOfNames.length; i++) {
            if (arrayOfNames[i - 1].length > arrayOfNames[i].length) {
                const temp: string = arrayOfNames[i - 1]
                arrayOfNames[i - 1] = arrayOfNames[i]
                arrayOfNames[i] = temp
                changed = true
            }
        }
    } while (changed)

    document.write(`<strong>Відсортований масив:</strong> [${arrayOfNames}]<br>`);

    /**
     * 
     * @param a {string[]} -  Відсортований масив.
     * @param targetLength {number} -  Довжина рядка.
     * @returns {number} - Індекс першого знайденого імені.
     */
    function findIndexByLength(a: string[], targetLength: number): number {
        let start = 0;
        let end = a.length - 1;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (a[mid].length === targetLength) return mid;
            else if (a[mid].length < targetLength) start = mid + 1;
            else end = mid - 1;
        }
        return -1;
    }
    document.write(`<hr>`)
    const searchIndex = findIndexByLength(arrayOfNames, 5);

    if (searchIndex !== -1)
        document.write(`Є ім'я довжиною 5 символів: '${arrayOfNames[searchIndex]}', під індексом ${searchIndex}`);
    else
        document.write(`Імені довжиною 5 символів у масиві немає.`);
}