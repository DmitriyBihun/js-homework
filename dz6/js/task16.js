if (confirm('Почати тестування?')) {

   let numbOfStudents = parseInt(prompt(`Введіть кількість учнів у класі:`, '8'));
   let sumHeight = 0

   for (let i = 1; i <= numbOfStudents; i++) {
      let studentHeight = parseFloat(prompt(`Введіть зріст ${i} учня в см:`, '180'))
      sumHeight +=studentHeight;
   }

   let averageHeight = parseFloat((sumHeight / numbOfStudents).toFixed(2));
   
   document.write(`Середній зріст учнів у класі ${averageHeight} см.`)
}

