if (confirm('Почати тестування?')) {

   let userMoney = parseFloat(prompt('Введіть к-сть грошей:', '400'))
   let productsPrices = [1000, 20, 31, 574, 694, 200, 99, 211]
   let productsTitles = ['cheese', 'juice', 'bread', 'tiramisu', 'cake', 'drinking water', 'ice cream', 'fruits']

   for (let i = 0; i < productsPrices.length; i++) {
      if (productsPrices[i] <= userMoney) {
         document.write(productsTitles[i] + ' - ' + productsPrices[i] + '<br>')
      }
   }
} 

