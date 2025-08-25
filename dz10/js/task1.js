if (confirm('Почати тестування?')) {

    let countOfNumbers = parseInt(prompt('Введіть к-сть чисел в масиві:', '10'))

    function getArrayWithNumbers(countOfNumbers, min, max) {
        const arr = []

        for (let i = 0; i < countOfNumbers; i++) {
            const randNumber = Math.floor(Math.random() * (max - min) + 1) + min;
            arr.push(randNumber)
        }
        return arr
    }

    let array = getArrayWithNumbers(countOfNumbers, 1, 10000)

    document.write(`Початковий масив з чисел: ${array.join(', ')}`)

    document.write(`<hr>`)

    // Task_1

    let arrayNumbMoreThan1000 = array.filter(number => number > 1000)

    document.write(`Масив чисел більших за 1000: ${arrayNumbMoreThan1000.join(', ')} <br>`)

    // Task_2

    let arrayOfIndexMoreThan1000 = array.map((num, ind) => {
        if (num > 1000) {
            return num
        } else {
            return null
        }
    })
        .filter(ind => {
            return ind !== null
        })
    document.write(`Масив індексів чисел більших за 1000: ${arrayOfIndexMoreThan1000}<br>`)

    // Task_3

    let nextNumLessPrevList = array.filter((num, ind, baseArr) => {
        if (ind !== 0) {
            return num > baseArr[ind - 1]
        }
    })
    document.write(`Cписок цін, які більші за попереднє значення: ${nextNumLessPrevList}<br>`)

    // Task_4

    const maxPrice = array.reduce((prevMax, num) => num > prevMax ? num : prevMax);
    const priceListNumPercentOfMax = array.map(price => ((price / maxPrice) * 100).toFixed(2))
    document.write(`Cписок цін у відсотках стосовно максимального: ${priceListNumPercentOfMax.join('%, ')} <br>`)

    // Task_5

    const numbPriceChanges = array.reduce((count, price, ind, baseArr) => {
        if (ind > 0 && price !== baseArr[ind - 1]) return count + 1;
        return count
    }, 0)
    document.write(`Кількість змін цін: ${numbPriceChanges}<br>`)

    // Task_6

    if (array.some(price => price < 1000)) document.write(`Так, є ціна, що менше 1000 <br>`)
    else document.write(`Ні, немає ціни, що менше 1000 <br>`)

    // Task_7

    if (array.every(price => price > 1000)) document.write(`Так, усі ціни більше за 1000 <br>`)
    else document.write(`Ні, не усі ціни більше за 1000 <br>`)

    // Task_8

    const countNumbMore1000 = array.reduce((count, numb) => numb > 1000 ? count + 1 : count, 0)
    document.write(`Кількість цін, що більше за 1000: ${countNumbMore1000}<br>`)

    // Task_9

    const sumPricesMore1000 = array.reduce(
        (prevSum, price) => (price > 1000 ? prevSum + price : prevSum), 0)

    document.write(`Сума цін, що більше за 1000: ${sumPricesMore1000}<br>`)

    // Task_10

    const firstPriceMore1000 = array.find(price => price > 1000)
    document.write(`Перша ціна, що більше за 1000: ${firstPriceMore1000}<br>`)

    // Task_11

    const indFirstPriceMore1000 = array.findIndex(price => price > 1000)
    document.write(`Iндекс першої ціни, що більше за 1000: ${indFirstPriceMore1000}<br>`)

    // Task_12

    const lastPriceMore1000 = array.findLast(price => price > 1000)
    document.write(`Остання ціна, що більше за 1000: ${lastPriceMore1000}<br>`)

    // Task_13

    const indLastPriceMore1000 = array.findLastIndex(price => price > 1000)
    document.write(`Iндекс останньої ціни, що більше за 1000: ${indLastPriceMore1000}<br>`)
}



