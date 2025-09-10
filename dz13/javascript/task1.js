"use strict";
if (confirm('Почати тестування?')) {
    /**
     * Рекурсивно генерує всі можливі підмножини заданого масиву та виводить їх на сторінку.
     * @param ind {number} - Поточний індекс в масиві.
     * @param arr {number[]} - Масив чисел для якого генеруються підмножини.
     * @param current {number[]} - Підмножини які формуються рекурсією.
     */
    function generateSubsets(ind, arr, current) {
        if (ind === arr.length)
            document.write(`[${current}]<br>`);
        else {
            generateSubsets(ind + 1, arr, current);
            generateSubsets(ind + 1, arr, [...current, arr[ind]]);
        }
    }
    let countOfNumb = parseInt(prompt(`Скільки чисел хочете додати в массив?`, '3') || '0');
    let someArr = [];
    for (let i = 0; i < countOfNumb; i++) {
        const input = prompt(`Введіть ${i + 1} число`);
        const num = parseInt(input || '0');
        someArr.push(num);
    }
    generateSubsets(0, someArr, []);
}
