if (confirm('Почати тестування?')) {
    for (let n1 = 1; n1 <= 9; n1++) {
        for (let n2 = 0; n2 <= 9 ; n2++) {
            for (let n3 = 0; n3 <= 9; n3++) {
                if(n1 >= (n2 + n3)) {
                    document.write(`${n1}${n2}${n3} <br>`)
                }
            }
        }
    }
}

