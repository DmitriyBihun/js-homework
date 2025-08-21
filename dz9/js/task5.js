if (confirm('Почати тестування?')) {

   function getArrayWithNumbers(countOfNumbers, min, max) {
      const array = []

      for (let i = 0; i < countOfNumbers; i++) {
         const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
         array.push(randNumber)
      }
      return array
   }

   let arrayWithRandomNumb = getArrayWithNumbers(10, -8, 8)

   document.write(arrayWithRandomNumb)
   document.write(`<br>`)

   let product = 1;

   for (const num of arrayWithRandomNumb) {
      if (num > 0) {
         product = product * num
      }
   }

   document.write(`Добуток додатніх чисел = ${product}`)
} 