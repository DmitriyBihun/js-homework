if (confirm('Почати тестування?')) {

    /**
     * Рекурсивно генерує всі можливі підмножини заданого масиву та виводить їх на сторінку. 
     * @param ind {number} - Поточний індекс в масиві.
     * @param arr {number[]} - Масив чисел для якого генеруються підмножини.
     * @param current {number[]} - Підмножини які формуються рекурсією.
     */
    function generateSubsets(ind:number, arr:number[], current:number[]) {
        if (ind === arr.length) document.write(`[${current}]<br>`)
        else {
            generateSubsets(ind + 1, arr, current);
            generateSubsets(ind + 1, arr, [...current, arr[ind]]);
        }
    }

    let countOfNumb: number = parseInt(prompt(`Скільки чисел хочете додати в массив?`, '3') || '0');

    let someArr:number[] = [];
    for (let i = 0; i < countOfNumb; i++) {
        const input: string | null = prompt(`Введіть ${i + 1} число`);
        const num : number = parseInt(input || '0')
        someArr.push(num)
    }

    generateSubsets(0, someArr, [])
}