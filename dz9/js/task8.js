if (confirm('Почати тестування?')) {

   const arrayOfCarNumber = ['NM5768', 'A5872', 'V684207V', 'A6849', 'J007B', 'W010101W', 'L070L', 'O6542N', 'A010101W'];

   const arrayOfCarA = []

   arrayOfCarNumber.forEach(number => {
      if (number[0] === 'A') {
         arrayOfCarA.push(number)
      }
   })

   document.write(`Початковий масив номерів: ${arrayOfCarNumber} <br>`)
   document.write(`Масив номерів з А: ${arrayOfCarA}`)
} 
