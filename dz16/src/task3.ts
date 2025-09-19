if (confirm('Почати тестування?')) {

    class TDate {
        #day!: number;
        #month!: number;
        #year!: number;

        constructor(initDay: number, initMonth: number, initYear: number) {
            this.Year = initYear,
                this.Month = initMonth,
                this.Day = initDay
        }
        private getDaysInMonth(year: number, month: number): number {
            if (month === 2) {
                if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) return 29;
                else return 28;
            } else if ([4, 6, 9, 11].includes(month)) {
                return 30;
            } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
                return 31;
            } else {
                throw new Error("Невірний місяць");
            }
        }
        get Day() {
            return this.#day
        }
        set Day(val) {
            if (val <= 0) throw new Error("Число має бути додатнім.");
            const maxDays = this.getDaysInMonth(this.#year, this.#month);
            if (val > maxDays) throw new Error(`У цьому місяці лише ${maxDays} днів`);
            this.#day = val;
        }
        get Month() {
            return this.#month
        }
        set Month(val) {
            if (val < 1 || val > 12) throw new Error("Невірний місяць.");
            this.#month = val
        }
        get Year() {
            return this.#year
        }
        set Year(val) {
            if (val <= 0) throw new Error("Число має бути додатнім.");
            this.#year = val
        }
        addDays(n: number) {
            let day = this.Day + n;
            while (day > this.getDaysInMonth(this.Year, this.Month)) {
                const maxDays = this.getDaysInMonth(this.Year, this.Month)
                day -= maxDays;
                this.Month += 1;
                if (this.Month > 12) {
                    this.Month = 1;
                    this.Year += 1
                }
            }
            while (day <= 0) {
                this.Month -= 1;
                if (this.Month < 1) {
                    this.Month = 12;
                    this.Year -= 1
                }
                const maxPrev = this.getDaysInMonth(this.Year, this.Month)
                day += maxPrev
            }
            this.Day = day;
        }
        addMonths(n: number) {
            let totalMonth = (this.Year * 12 + (this.Month - 1) + n);

            let newYear = Math.floor(totalMonth / 12);
            let newMonth = (totalMonth % 12) + 1;
            const maxDays = this.getDaysInMonth(newYear, newMonth);

            let newDay = this.Day;
            if (newDay > maxDays) newDay = maxDays;

            this.Year = newYear;
            this.Month = newMonth;
            this.Day = newDay;
        }
        addYears(n: number) {
            let newYear = this.Year + n;

            const maxDays = this.getDaysInMonth(newYear, this.Month);

            let newDay = this.Day;
            if (newDay > maxDays) {
                newDay = maxDays;
            }

            this.Year = newYear;
            this.Day = newDay;
        }
        toString() {
            return `${this.Day.toString()}.${this.Month.toString()}.${this.Year}`;
        }
    }
    let date = new TDate(28, 2, 2024)
    document.write(`${date.toString()}<br>`);

    date.addDays(-4)
    document.write(`${date.toString()}<br>`);

    date.addMonths(5)
    document.write(`${date.toString()}<br>`);

    date.addYears(2)
    document.write(`${date.toString()}<br>`);

}