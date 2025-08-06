if (confirm('Почати тестування?')) {

    let userNumb = parseInt(prompt('Загадайте число:', '1-10'));
    let exampleNumb = 5;

    for (let i = 3; i > 0; i--) {
        
        const userResp = confirm(`Ваше число більше за ${exampleNumb}? В мене є ${i} спроби`)

        if (userResp) {
            exampleNumb += 2;
        }
        else {
            exampleNumb -= 1;
        }
        if(userNumb === exampleNumb) {
            document.write(`Вітаю. Комп*ютер вгадав число ${userNumb}.`)
            break
        }
    }
    if (userNumb !== exampleNumb){
        document.write(`Нажаль. Комп*ютер не вгадав число ${userNumb}.`)
    }
}

