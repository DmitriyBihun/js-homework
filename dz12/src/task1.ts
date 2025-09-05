/**
 * 
 * @param min {number} - Мін. значення.
 * @param max {number} - Макс. значення.
 * @returns {number[]} - Одновимірний масив.
 */
const getRandNumbList = (min: number, max: number): number[] => Array.from({ length: 30 }, () => min + Math.floor(Math.random() * (max - min + 1)));

const array:number[] = getRandNumbList(1, 100);
document.write(`Початковий масив: ${array} <br>`);

let swapsCount: number = 0;
let changed: boolean;

do {
    changed = false
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            const numb: number = array[i - 1]
            array[i - 1] = array[i]
            array[i] = numb
            swapsCount++
            changed = true
        }
    }
} while (changed)

document.write(`Відсортований масив: ${array} <br>`)
document.write(`Кількість обмінів: ${swapsCount}`)