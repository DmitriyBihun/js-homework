/**
 * 
 * @param min {number} - Мін. значення.
 * @param max {number} - Макс. значення.
 * @returns {number[]} - Одновимірний масив.
 */
const getRandNumbList3 = (min: number, max: number): number[] => Array.from({ length: 30 }, () => min + Math.floor(Math.random() * (max - min + 1)));

const arr: number[] = getRandNumbList3(1, 100);
document.write(`Початковий масив: ${arr} <br>`);

let countOfSwaps: number = 0;

for (let k = 0; k < arr.length; k++) {
    let key: number = arr[k];
    let i: number = k - 1;

    while (i >= 0 && arr[i] > key) {
        arr[i + 1] = arr[i];
        i--
        countOfSwaps++
    }
    arr[i + 1] = key;

}

document.write(`Відсортований масив: ${arr} <br>`)
document.write(`Кількість обмінів: ${countOfSwaps}`)