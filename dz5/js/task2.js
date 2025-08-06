if (confirm('Почати тестування?')) {
    
    for (let i = 1; i <= 10; i++) {
       
        const productPrice = parseFloat(prompt(`Введіть ціну ${i} продукту`, '20.15'));

        document.write(`Product ${i}: ${productPrice} грн <br>`)
    }

}

