if (confirm('Почати тестування?')) {

    document.write(`<table border="1">`)
    document.write(`<tr>`)

    for (let i = 1; i <= 7; i++) {
        document.write(`<td>${i}</td>`)

    }
    
    document.write(`</tr>`)
    document.write(`</table>`)

}

