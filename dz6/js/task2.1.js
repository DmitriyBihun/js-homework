if (confirm('Почати тестування?')) {

    for (let i = 0; i < 7; i++) {
        for (let k = 0; k < 7 - (i + 1); k++) {
            document.write('&nbsp;')
        }
        for (let j = 0; j < i + 1; j++) {
            document.write(`o`)
        }
        
        document.write(`<br>`)
    }

}

