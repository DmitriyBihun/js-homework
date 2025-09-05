"use strict";
/**
 *
 * @param min {number} - Мін. значення.
 * @param max {number} - Макс. значення.
 * @returns {number[]} - Одновимірний масив.
 */
const getRandNumbList = (min, max) => Array.from({ length: 30 }, () => min + Math.floor(Math.random() * (max - min + 1)));
const array = getRandNumbList(1, 100);
document.write(`Початковий масив: ${array} <br>`);
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
        }
    }
} while (changed);
document.write(`Відсортований масив: ${array} <br>`);
document.write(`Кількість обмінів: ${swapsCount}`);
