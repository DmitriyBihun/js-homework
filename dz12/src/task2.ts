/**
 * 
 * @param min {number} - Мін. значення.
 * @param max {number} - Макс. значення.
 * @returns {number[]} - Одновимірний масив.
 */
const getRandNumbList2 = (min: number, max: number): number[] => Array.from({ length: 30 }, () => min + Math.floor(Math.random() * (max - min + 1)));

const array2: number[] = getRandNumbList2(1, 100);
document.write(`Початковий масив: ${array2} <br>`);

let leftIndex: number = 0;
let rightIndex: number = array2.length - 1;
let swaps: number = 0;

while (leftIndex < rightIndex) {
    let changed = false;
    for (let i = leftIndex + 1; i <= rightIndex; i++) {
        if (array2[i - 1] > array2[i]) {
            const numb: number = array2[i - 1]
            array2[i - 1] = array2[i]
            array2[i] = numb
            swaps++
            changed = true
        }
    }
    if (!changed) break;
    rightIndex--

    for (let i = rightIndex; i > leftIndex; i--) {
        if (array2[i - 1] > array2[i]) {
            const numb: number = array2[i - 1]
            array2[i - 1] = array2[i]
            array2[i] = numb
            swaps++
            changed = true
        }
    }
    if (!changed) break;
    leftIndex++
}
document.write(`Відсортований масив: ${array2} <br>`)
document.write(`Кількість обмінів: ${swaps}`)