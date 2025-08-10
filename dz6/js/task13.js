if (confirm('Почати тестування?')) {

   for (let i = 20; i <= 50; i++) {
    if(i % 3 === 0 && i % 5 !== 0)
    document.write(`${i} <br>`)
   }

}

