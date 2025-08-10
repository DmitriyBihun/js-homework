if (confirm('Почати тестування?')) {

   let machines = parseInt(prompt(`Кількість сінокосарок:`, '5'));
   let workingHours = parseFloat(prompt(`Скільки годин працювала перша сінокосарка:`, '3'));
   let totalTime = 0;

   for (let i = 1; i <= machines; i++) {
      let timeForMachine = workingHours + (i - 1) * (10 / 60);
      totalTime += timeForMachine
   }

   document.write(`<h2>${totalTime.toFixed(2)} годин працювала вся бригада.</h2>`)
} debugger

