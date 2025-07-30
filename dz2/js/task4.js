let centimeterLength = parseFloat(prompt('Введіть довжину в сантиметрах:', '0'))

let meterLength = centimeterLength / 100;
let kilometerLength = centimeterLength / 100000;


document.write(`
    <h2>Задана довжина - ${centimeterLength} см.</h2>
    <h2>Довжина в метрах: ${meterLength}.</h2>
    <h2>Довжина в кілометрах: ${kilometerLength}.</h2>

    <span>-----------------------------</span>
    <p>Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.</p>
`)