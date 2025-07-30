let a = parseFloat(prompt('Введіть число а:', '0'))
let b = parseFloat(prompt('Введіть число b:', '0'))
let c = parseFloat(prompt('Введіть число c:', '0'))

let s1 = a + 12 + b;
let s2 = Math.sqrt((a + b) / (2 * a));
let s3 = Math.cbrt((a + b) * c);
let s4 = Math.sin(a / (-b));


document.write(`
    <h2>Значення а: ${a}</h2>
    <h2>Значення b: ${b}</h2>
    <h2>Значення c: ${c}</h2>
    <span>-----------------------------</span>
    <h3>S1: ${s1}</h3>
    <h3>S2: ${s2}</h3>
    <h3>S3: ${s3}</h3>
    <h3>S4: ${s4}</h3>
    <img src="img/task0.png" alt="image">
    `)