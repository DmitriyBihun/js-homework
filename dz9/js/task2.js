if (confirm('Почати тестування?')) {
    
    const countOfNumbers = parseInt(prompt('Введіть к-сть чисел:', '6'));

    let arr = new Array(countOfNumbers).fill(1, 0, Math.floor(countOfNumbers / 2)).fill(7, Math.floor(countOfNumbers / 2), countOfNumbers);


    document.write(arr)
} 
