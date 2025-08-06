if (confirm('Почати тестування?')) {

    const quantityNumb = parseInt(prompt(`Кількість випадкових чисел`, '4'));
    
    document.write(`<ul>`)

    for (let i = 0; i < quantityNumb; i++) {

        randomNumb = Math.floor(Math.random() * 100) + 1;

        document.write(`
            <li>${randomNumb}</li>`)
    }

    document.write(`</ul>`)
}

