if (confirm('Почати тестування?')) {

   const arrayOfNames = ['Dmytro', 'Olga', 'Ihor', 'Oleksandr', 'Ivan', 'Mykola', 'Victoriya', 'Andriy', 'Valeriy'];

   const arrayOfFirstLetter = arrayOfNames.map(name => name[0])

   document.write(`<h3>Початковий масив імен: ${arrayOfNames} <br></h3>`)
   document.write(`<h3>Масив імен з першої букви: ${arrayOfFirstLetter}</h3`)
} 
