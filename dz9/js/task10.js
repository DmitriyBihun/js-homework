if (confirm('Почати тестування?')) {

   const arrayPrices = [1350, 950, 800, 7000, 440, 2901, 5271, 100, 987, 2398];

   const arrayPricesOfTax = arrayPrices.map(price => {
      return parseFloat((price * 0.2).toFixed(2))
   });

   document.write(`Початковий масив цін: ${arrayPrices}<br>`);
   document.write(`Масив сплаченого податку (20%): ${arrayPricesOfTax}`);
}