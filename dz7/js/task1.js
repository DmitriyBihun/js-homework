if (confirm('Почати тестування?')) {

    function getNameOfMonth(monthNumb) {
        let result
        switch (monthNumb) {
            case 1:
                result = 'Січень'
                break;
            case 2:
                result = 'Лютий'
                break;
            case 3:
                result = 'Березень'
                break;
            case 4:
                result = 'Квітень'
                break;
            case 5:
                result = 'Травень'
                break;
            case 6:
                result = 'Червень'
                break;
            case 7:
                result = 'Липень'
                break;
            case 8:
                result = 'Серпень'
                break;
            case 9:
                result = 'Вересень'
                break;
            case 10:
                result = 'Жовтень'
                break;
            case 11:
                result = 'Листопад'
                break;
            case 12:
                result = 'Грудень'
                break;
            default:
                throw new Error("Невірно введена цифра.");
        }
        return result
    }
    let usersAnswer = parseInt(prompt('Введіть номер місяця від 1 до 12:', '7'))
    document.write(getNameOfMonth(usersAnswer))
}


