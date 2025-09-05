"use strict";
if (confirm('Почати тестування?')) {
    const arrayOfNames = ['Mykola', 'Denys', 'Oleksandr', 'Oleg', 'Olga', 'Dmytro', 'Borys', 'Oksana', 'Petro', 'Irina', 'Viktoriya'];
    document.write(`<strong>Масив імен:</strong> [${arrayOfNames}]<br>`);
    let changed;
    do {
        changed = false;
        for (let i = 1; i < arrayOfNames.length; i++) {
            if (arrayOfNames[i - 1] > arrayOfNames[i]) {
                const temp = arrayOfNames[i - 1];
                arrayOfNames[i - 1] = arrayOfNames[i];
                arrayOfNames[i] = temp;
                changed = true;
            }
        }
    } while (changed);
    document.write(`<strong>Відсортований масив:</strong> [${arrayOfNames}]<br>`);
    /**
     *
     * @param a {string[]} -  Відсортований масив рядків, у якому шукаємо елемент.
     * @param searchElement {string} - Елемент, який шукаємо у масиві.
     * @returns {number} - Індекс знайденого елемента
     */
    function findIndex(a, searchElement) {
        let start = 0;
        let end = a.length - 1;
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (a[mid] === searchElement)
                return mid;
            if (a[mid] < searchElement)
                start = mid + 1;
            if (a[mid] > searchElement)
                end = mid - 1;
        }
        return -1;
    }
    document.write(`<hr>`);
    const searchIndex = findIndex(arrayOfNames, 'Olga');
    if (searchIndex !== -1)
        document.write(`'Olga' є у масиві. Під індексом ${searchIndex}`);
    else
        document.write(`'Olga' немає у масиві.`);
}
