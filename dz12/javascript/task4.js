"use strict";
if (confirm('Почати тестування?')) {
    /**
     *
     * @param min {number} - Мін. значення.
     * @param max {number} - Макс. значення.
     * @returns {number[]} - Одновимірний масив.
     */
    const getRandNumbList = (min, max) => Array.from({ length: 5 }, () => min + Math.floor(Math.random() * (max - min + 1)));
    const array = getRandNumbList(1, 9);
    document.write(`<strong>Початковий масив: [${array}]</strong> <br>`);
    document.write(`Сортування бульбашкою:<br>`);
    let swapsCount = 0;
    let changed;
    do {
        changed = false;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                const numb = array[i - 1];
                array[i - 1] = array[i];
                array[i] = numb;
                swapsCount++;
                changed = true;
                document.write(`[${array}]<br>`);
            }
        }
    } while (changed);
    document.write(`Кількість обмінів: ${swapsCount}`);
}
