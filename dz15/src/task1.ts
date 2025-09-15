if (confirm('Почати тестування?')) {

    type NumberArray = {
        numbers: number[],
        getSum?: () => number,
        getProd?: () => number,
    }

    let objList: NumberArray[] = [
        {
            numbers: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)),
            getSum: function () {
                return this.numbers.reduce((prevSum, num) => prevSum + num, 0)
            }
        },
        {
            numbers: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)),
            getProd: function () {
                const minNumb = Math.min(...this.numbers)
                const maxNumb = Math.max(...this.numbers)
                return this.numbers.filter(num => num > minNumb && num < maxNumb).reduce((prevProd, num) => prevProd * num, 1)
            }
        }
    ]

    document.write(`Масив чисел 1-го об*єкту: [${objList[0].numbers}]<br>`);
    document.write(`Масив чисел 2-го об*єкту: [${objList[1].numbers}]<br>`);
    document.write(`<hr>`)

    // Так як ts свариться на те, що об*єкт не гарантовано має цей метод, роблю перевірку на існування метода.
    if (objList[0].getSum) document.write(`Сума чисел 1-го масиву: ${objList[0].getSum()}<br>`);
    if (objList[1].getProd) document.write(`Добуток чисел 1-го масиву: ${objList[1].getProd.apply(objList[0])}<br>`);
    if (objList[0].getSum) document.write(`Сума чисел 2-го масиву: ${objList[0].getSum.call(objList[1])}<br>`);
    if (objList[1].getProd) document.write(`Добуток чисел 2-го масиву: ${objList[1].getProd()}<br>`);


}