if (confirm('Почати тестування?')) {

   const arrayPrices = [1350, 950, 800, 7000, 440, 2901, 5271, 100, 987, 2398];
   const sale = 0.7;

   const arrayWithSale = arrayPrices.map((price) => {
      if (price > 1000) {
         return parseFloat(price * sale).toFixed(2)
      }
      else {
         return price
      }
   })

   document.write(`Початковий масив цін: ${arrayPrices} <br>`)
   document.write(`Масив цін зі знижкою: ${arrayWithSale}`)
} 
