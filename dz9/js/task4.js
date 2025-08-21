if (confirm('Почати тестування?')) {

   const arrOfNumbers = [100, 50, 971, 56, 69, 71, 888, 700, 567, 123, 20, 1, 54, 2];

   document.write(`Більші за 100:<br>`);

   for (const number of arrOfNumbers) {
      if(number > 100) document.write(`${number} <br>`)
   }

} 






/*
const countOfNumbers = parseInt(prompt(`Count of numbers:`, '8'));

let arr = []

for (let i = 0; i < countOfNumbers; i++) {
   let numb = parseInt(prompt(`Write ${i + 1} number from 100:`, '200'))
   arr.push(numb)
}

document.write(`Numb that > 100:<br>`);

for (const number of arr) {
   if (number > 100) document.write(`${number} <br>`)
}
*/