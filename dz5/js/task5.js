if (confirm('Почати тестування?')) {


    let num = 1;

    document.write(`<table border="1">`)

    for (let row = 1; row <= 3; row++) {
        document.write(`<tr>`);

        for (let col = 1; col <= 3; col++) {
            document.write(`<td>${num++}</td>`);
        }

        document.write(`</tr>`);
    }

    document.write(`</table>`)

}

