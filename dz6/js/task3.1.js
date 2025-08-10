if (confirm('Почати тестування?')) {

    for (let i = 0; i < 12; i++) {
        for (let k = 0; k < i; k++) {
            document.write('&nbsp;');
        }
        for (let j = 0; j < 12 - i; j++) {
            document.write(`o`)
        }
        
        document.write(`<br>`)
    }

} 

