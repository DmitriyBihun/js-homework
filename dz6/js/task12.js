if (confirm('Почати тестування?')) {

    for (let i = 0; i < 10; i++) {
        let firstNum = parseInt(prompt(`Введіть першу цифру`, '0'))
        let secondNum = parseInt(prompt(`Введіть другу цифру`, '0'))
        
        if(firstNum > secondNum) {
            document.write(`${firstNum} більше за ${secondNum} <br>`)
        }
        else if (firstNum < secondNum) {
            document.write(`${secondNum} більше за ${firstNum} <br>`)
        }
        else {
            document.write(`${firstNum} і ${secondNum} — однакові <br>`);
        }
    }

}

