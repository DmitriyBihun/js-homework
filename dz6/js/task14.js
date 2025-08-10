if (confirm('Почати тестування?')) {

   for (let i = 35; i <= 87; i++) {
      if (i % 7 === 1 || i % 7 === 2 || i % 7 === 5) {
      document.write(`${i} <br>`)
    }
   }

}

