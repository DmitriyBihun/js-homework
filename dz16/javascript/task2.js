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
var _TMoney_usdAmount, _TMoney_usdRate;
if (confirm('Почати тестування?')) {
    class TMoney {
        constructor(initUsdAmount, initUsdRate) {
            _TMoney_usdAmount.set(this, void 0);
            _TMoney_usdRate.set(this, void 0);
            this.UsdAmount = initUsdAmount;
            this.UsdRate = initUsdRate;
        }
        get UsdAmount() {
            return __classPrivateFieldGet(this, _TMoney_usdAmount, "f");
        }
        set UsdAmount(val) {
            if (val < 0)
                throw new Error("Сума не може бути від'ємною");
            __classPrivateFieldSet(this, _TMoney_usdAmount, val, "f");
        }
        get UsdRate() {
            return __classPrivateFieldGet(this, _TMoney_usdRate, "f");
        }
        set UsdRate(val) {
            if (val <= 0)
                throw new Error("Курс має бути більший за нуль");
            __classPrivateFieldSet(this, _TMoney_usdRate, val, "f");
        }
        addUAH(amountUAH) {
            this.UsdAmount = this.UsdAmount + amountUAH / this.UsdRate;
            return this;
        }
        withdrawUAH(amountUAH) {
            let usdToWithdraw = amountUAH / this.UsdRate;
            if (usdToWithdraw > this.UsdAmount) {
                throw new Error("Недостатньо коштів для зняття");
            }
            this.UsdAmount = this.UsdAmount - usdToWithdraw;
            return this;
        }
        usdRateToIncreaseUAH(amountUAH) {
            if (this.UsdAmount === 0) {
                throw new Error("Сума в доларах дорівнює нулю");
            }
            let currUAH = this.UsdAmount * this.UsdRate;
            let targetUAH = currUAH + amountUAH;
            return targetUAH / this.UsdAmount;
        }
        toString() {
            return `На рахунку: ${(this.UsdAmount * this.UsdRate).toFixed(2)} грн`;
        }
    }
    _TMoney_usdAmount = new WeakMap(), _TMoney_usdRate = new WeakMap();
    try {
        const myMoney = new TMoney(10, 40);
        document.write(`${myMoney.toString()}<br>`);
        myMoney.addUAH(500).withdrawUAH(200);
        document.write(`${myMoney.toString()}<br>`);
        const newRate = myMoney.usdRateToIncreaseUAH(100);
        document.write("Курс для збільшення гривень на 100: ", newRate.toFixed(2));
    }
    catch (err) {
        console.log("Сталася помилка:", err.message);
    }
}
