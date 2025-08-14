if (confirm('Почати тестування?')) {
    
    function getNameOfWeek(day) {
        let result
        switch (day) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                result = 'Робочий день.'
                break;
            case 6:
            case 7:
                result = 'Вихідний.'
                break;

            default:
                throw new Error("Невірно введена цифра.");
        }
        return result
    }
    let usersAnswer = parseInt(prompt('Введіть номер дня тижня від 1 до 7:', '3'))
    document.write(getNameOfWeek(usersAnswer))
} 

