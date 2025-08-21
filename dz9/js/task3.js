if (confirm('Почати тестування?')) {

    const countOfNumbers = parseInt(prompt('Введіть к-сть чисел:', '10'));

    let arr = new Array(countOfNumbers).fill(1, 0, 5).fill(7, 5);

    document.write(arr)
}

