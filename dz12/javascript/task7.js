"use strict";
if (confirm('Почати тестування?')) {
    /**
     *
     * @param elCount {number} - К-сть елементів.
     * @param min {number} - Мін. значення.
     * @param max {number} - Макс. значення.
     * @returns {number[]} - Одновимірний масив.
     */
    const getRandomRow = (elCount, min, max) => Array.from({ length: elCount }, () => min + Math.floor(Math.random() * (max - min + 1)));
    /**
     *
     * @param rowCount {number} - К-сть рядків.
     * @param colCount {number} - К-сть стовпців.
     * @param min {number} - Мін. значення.
     * @param max {number} - Макс. значення.
     * @returns {number[][]} - Двовимірний масив.
     */
    const getMatrix = (rowCount, colCount, min, max) => Array.from({ length: rowCount }, () => getRandomRow(colCount, min, max));
    const matrix = getMatrix(4, 8, 1, 7);
    document.write(`<strong>Масив чисел:</strong><br>`);
    for (let row = 0; row < matrix.length; row++) {
        document.write(`${matrix[row].join(' ')}<br>`);
    }
    document.write(`<hr>`);
    for (let row = 0; row < matrix.length; row++) {
        let countOf7 = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 7)
                countOf7++;
        }
        document.write(`У рядку ${row + 1} к-сть 7: ${countOf7}<br>`);
    }
}
