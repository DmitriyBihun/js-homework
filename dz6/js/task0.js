if (confirm('Почати тестування?')) {

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            document.write(letters[i + j] + ' ');
            
        }
        document.write(`<br>`)
    }
} debugger

