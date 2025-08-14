if (confirm('Почати тестування?')) {


   const rows = parseInt(prompt('Введіть к-сть рядків:', '5'))
   const columns = parseInt(prompt('Введіть к-сть стовпців:', '5'))
   const message = prompt('Введіть повідомлення:', 'Ola!')

   function createTable(rows, columns, message) {
      let table = `<table border="1">`;
      for (let i = 0; i < rows; i++) {
         table = table + `<tr>`
         for (let j = 0; j < columns; j++) {
            table = table + `<td>${message}</td>`
         }
         table = table + `</tr>`
      }
      table = table + `</table>`
      return table;
   }

   document.write(createTable(rows, columns, message))
}

