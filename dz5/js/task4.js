if (confirm('Почати тестування?')) {

    document.write(`<table border="1">`)

    for (let row = 1; row <= 3; row++) {
        
        document.write(`<tr>`);

        for (let col = 1; col <= 7; col++) {
            document.write(`<td>${col}</td>`)
        }

        document.write(`</tr>`); 
    }

    document.write(`</table>`)

}

