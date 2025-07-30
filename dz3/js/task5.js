let driverCategory = prompt(`Введіть назву категорії водія А-С:`, 'A')
let category

switch (driverCategory) {
    case 'A': category = 'A-мотоцикл'
        break;
    case 'B': category = 'В-легковий автомобіль'
        break;
    case 'C': category = 'С-вантажний автомобіль'
        break;
    default: category = 'Невірно вказана категорія.'
    break
}
document.write(`<h2>Категорія: ${category}</h2>`)