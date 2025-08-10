if (confirm('Почати тестування?')) {

    for (let i = 0; i < 23; i++) {
        for (let k = 0; k < i + 1; k++) {
            document.write(`${k + 1} `)
            
        }
        document.write(`<br>`)
    }
} 

