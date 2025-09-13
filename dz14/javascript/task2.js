"use strict";
if (confirm('Почати тестування?')) {
    let userDate = {
        day: 23,
        month: 5,
        year: 2023,
    };
    /**
     * Вираховує нову дату через N міс. відносно вказаної.
     * @param param0 {month: number; year: number} - об'єкт з month та year.
     * @param N {number} - К-ість міс. на які потрібно здвинути дату
     * @returns {{ month: number, year: number }} - Новий міс. і рік після зміщення.
     */
    function getDateInN({ month, year }, N) {
        let totalMonth = (month - 1) + N;
        let newMonth = (totalMonth % 12) + 1;
        let yearShift = Math.floor(totalMonth / 12);
        let newYear = year + yearShift;
        return { month: newMonth, year: newYear };
    }
    console.log(getDateInN(userDate, 27));
    document.write(JSON.stringify(getDateInN(userDate, 2)));
}
