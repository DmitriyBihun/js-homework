if (confirm('Почати тестування?')) {

  function getInchFromCentimeter(num) {
    return Math.round((num / 2.54) * 100) / 100
  }
  function getPoundFromKilogram(num) {
    return Math.round((num * 2.20462) * 100) / 100
  }
  function getMileFromKilometer(num) {
    return Math.round((num * 0.62137) * 100) / 100
  }

  let centimeterNumb = parseFloat(prompt(`Введіть число в сантиметрах:`, '5'));
  let kilogramNumb = parseFloat(prompt(`Введіть число в кілограмах:`, '5'));
  let kilometerNumb = parseFloat(prompt(`Введіть число в кілометрах:`, '5'));

  let inches = getInchFromCentimeter(centimeterNumb);
  document.write(`${centimeterNumb} cm = ${inches} inch <br>`)

  let pounds = getPoundFromKilogram(kilogramNumb);
  document.write(`${kilogramNumb} kg = ${pounds} lb <br>`)

  let miles = getMileFromKilometer(kilometerNumb);
  document.write(`${kilometerNumb} km = ${miles} mi`)
}

/*
function convertUnits(value, factor) {
  return Math.round(value * factor * 100) / 100;
}
let centimeterNumb = parseFloat(prompt(`Введіть число в сантиметрах:`, '5'));
let kilogramNumb = parseFloat(prompt(`Введіть число в кілограмах:`, '5'));
let kilometerNumb = parseFloat(prompt(`Введіть число в кілометрах:`, '5'));

let inches = convertUnits(centimeterNumb, 1 / 2.54);  
let pounds = convertUnits(kilogramNumb, 2.20462);      
let miles = convertUnits(kilometerNumb, 0.62137);      

document.write(`${centimeterNumb} cm = ${inches} inch <br>`);
document.write(`${kilogramNumb} kg = ${pounds} lb <br>`);
document.write(`${kilometerNumb} km = ${miles} mi`);

*/