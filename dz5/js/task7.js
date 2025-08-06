if (confirm('Почати тестування?')) {

    let numbOfParagraph = parseInt(prompt('Введіть кількість абзаців:', '2'));

    for (let i = 1; i <= numbOfParagraph; i++) {
        document.write(`<h1>Заголовок ${i}</h1>`)
        
        for (let j = 1; j <= i; j++) {
            document.write(`<p>Розділ ${i}, параграф ${j}</p>`);
        }
        document.write(`<hr>`);
    }

}

