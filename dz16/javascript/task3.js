"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _TDate_day, _TDate_month, _TDate_year;
if (confirm('Почати тестування?')) {
    class TDate {
        constructor(initDay, initMonth, initYear) {
            _TDate_day.set(this, void 0);
            _TDate_month.set(this, void 0);
            _TDate_year.set(this, void 0);
            this.Year = initYear,
                this.Month = initMonth,
                this.Day = initDay;
        }
        getDaysInMonth(year, month) {
            if (month === 2) {
                if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
                    return 29;
                else
                    return 28;
            }
            else if ([4, 6, 9, 11].includes(month)) {
                return 30;
            }
            else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
                return 31;
            }
            else {
                throw new Error("Невірний місяць");
            }
        }
        get Day() {
            return __classPrivateFieldGet(this, _TDate_day, "f");
        }
        set Day(val) {
            if (val <= 0)
                throw new Error("Число має бути додатнім.");
            const maxDays = this.getDaysInMonth(__classPrivateFieldGet(this, _TDate_year, "f"), __classPrivateFieldGet(this, _TDate_month, "f"));
            if (val > maxDays)
                throw new Error(`У цьому місяці лише ${maxDays} днів`);
            __classPrivateFieldSet(this, _TDate_day, val, "f");
        }
        get Month() {
            return __classPrivateFieldGet(this, _TDate_month, "f");
        }
        set Month(val) {
            if (val < 1 || val > 12)
                throw new Error("Невірний місяць.");
            __classPrivateFieldSet(this, _TDate_month, val, "f");
        }
        get Year() {
            return __classPrivateFieldGet(this, _TDate_year, "f");
        }
        set Year(val) {
            if (val <= 0)
                throw new Error("Число має бути додатнім.");
            __classPrivateFieldSet(this, _TDate_year, val, "f");
        }
        addDays(n) {
            let day = this.Day + n;
            while (day > this.getDaysInMonth(this.Year, this.Month)) {
                const maxDays = this.getDaysInMonth(this.Year, this.Month);
                day -= maxDays;
                this.Month += 1;
                if (this.Month > 12) {
                    this.Month = 1;
                    this.Year += 1;
                }
            }
            while (day <= 0) {
                this.Month -= 1;
                if (this.Month < 1) {
                    this.Month = 12;
                    this.Year -= 1;
                }
                const maxPrev = this.getDaysInMonth(this.Year, this.Month);
                day += maxPrev;
            }
            this.Day = day;
        }
        addMonths(n) {
            let totalMonth = (this.Year * 12 + (this.Month - 1) + n);
            let newYear = Math.floor(totalMonth / 12);
            let newMonth = (totalMonth % 12) + 1;
            const maxDays = this.getDaysInMonth(newYear, newMonth);
            let newDay = this.Day;
            if (newDay > maxDays)
                newDay = maxDays;
            this.Year = newYear;
            this.Month = newMonth;
            this.Day = newDay;
        }
        addYears(n) {
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
    _TDate_day = new WeakMap(), _TDate_month = new WeakMap(), _TDate_year = new WeakMap();
    let date = new TDate(28, 2, 2024);
    document.write(`${date.toString()}<br>`);
    date.addDays(-4);
    document.write(`${date.toString()}<br>`);
    date.addMonths(5);
    document.write(`${date.toString()}<br>`);
    date.addYears(2);
    document.write(`${date.toString()}<br>`);
}
