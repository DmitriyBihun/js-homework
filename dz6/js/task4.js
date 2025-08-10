if (confirm('Почати тестування?')) {

   let money = parseFloat(prompt(`Скільки у Миколи грошей (грн.):`, '200'));
   let priceOfIceCrem = parseFloat(prompt(`Скільки коштує морозиво (грн.):`, '30'));
   let count = 0

   while (money >= priceOfIceCrem) {
      money -= priceOfIceCrem
      count++
   }
   document.write(`<h2>Залишилося ${money.toFixed(2)} грн. Микола з*їв морозива: ${count} шт.</h2>`);

}

