if (confirm('Почати тестування?')) {

    const countOfZeroes = parseInt(prompt('Введіть к-сть нулів:', '5'));

    let arr = new Array(countOfZeroes).fill(0)
    document.write(arr)
    document.write(`<br>`)
    document.write(`К-сть нулів: ${countOfZeroes}`)

}


