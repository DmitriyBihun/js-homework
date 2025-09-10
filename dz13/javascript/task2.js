"use strict";
if (confirm('Почати тестування?')) {
    let girlsArr = ['Olha', 'Kate', 'Daria', 'Vira'];
    let boysArr = ['Oleksandr', 'Dmytro', 'Mykola', 'Viktor'];
    /**
     * Рекурсивно генерує всі пари хлопчик-дівчинка та виводить їх на сторінку.
     * @param indBoys {number} - Поточний індекс в масиві хлопців.
     * @param indGirls {number} - Поточний індекс в масиві дівчат.
     * @param boysArr {number[]} - Масив хлопців.
     * @param girlsArr {number[]} - Масив хлопців.
     * @returns - Вивід пар.
     */
    function generatePair(indBoys, indGirls, boysArr, girlsArr) {
        if (indBoys === boysArr.length)
            return;
        if (indGirls === girlsArr.length) {
            generatePair(indBoys + 1, 0, boysArr, girlsArr);
            return;
        }
        document.write(`${boysArr[indBoys]} - ${girlsArr[indGirls]}<br>`);
        generatePair(indBoys, indGirls + 1, boysArr, girlsArr);
    }
    generatePair(0, 0, boysArr, girlsArr);
}
