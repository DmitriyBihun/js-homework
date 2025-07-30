let dayOfWeek = parseInt(prompt(`Введіть номер дня тижня 1-7:`, '1'))
let day

switch (dayOfWeek) {
    case 1: day = 'Понеділок'
        break;
    case 2: day = 'Вівторок'
        beak;
    case 3: day = 'Середа'
        break;
    case 4: day = 'Четвер'
        break;
    case 5: day = "П'ятниця"
        break;
    case 6: day = 'Субота'
        break;
    case 7: day = 'Неділя'
        break;
    default: day = 'Невірно вказаний день тижня.'
    break
}
document.write(`<h2>День тижня: ${day}</h2>`)