if (confirm('Почати тестування?')) {

   let numb
   let sum = 0;
   let count = 0;

   for (let i = 1; i <= 10; i++) {
      numb = parseFloat(prompt(`Введіть ${i} число:`, '5'));
      sum += numb
      count++

      if (sum > 100) {
         break
      }
   }
   

   document.write(`Кількість введених користувачем чисел: ${count}. Сума чисел складає: ${sum}`)
}

