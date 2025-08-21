if (confirm('Почати тестування?')) {

   function getArrayWithNumbers(countOfNumbers, min, max) {
      const array = []

      for (let i = 0; i < countOfNumbers; i++) {
         const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
         array.push(randNumber)
      }
      return array
   }

   let arrayWithRandomNumb = getArrayWithNumbers(10, 0, 100)
   document.write(`Початковий масив: ${arrayWithRandomNumb} <br>`)

   arrayWithRandomNumb.forEach((num, ind, baseArr) => {
      if (num > arrayWithRandomNumb[0]) {
         baseArr[ind] = baseArr[ind] * 2
      }
   })
   document.write(`Рішення: ${arrayWithRandomNumb}`)

} 
