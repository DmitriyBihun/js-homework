if (confirm('Почати тестування?')) {

    class TMoney {
        #usdAmount!: number
        #usdRate!: number

        constructor(initUsdAmount: number, initUsdRate: number) {
            this.UsdAmount = initUsdAmount;
            this.UsdRate = initUsdRate
        }
        get UsdAmount() {
            return this.#usdAmount
        }
        set UsdAmount(val) {
            if (val < 0) throw new Error("Сума не може бути від'ємною");
            this.#usdAmount = val
        }
        get UsdRate() {
            return this.#usdRate
        }
        set UsdRate(val) {
            if (val <= 0) throw new Error("Курс має бути більший за нуль");
            this.#usdRate = val;
        }
        addUAH(amountUAH: number) {
            this.UsdAmount = this.UsdAmount + amountUAH / this.UsdRate;
            return this
        }
        withdrawUAH(amountUAH: number) {
            let usdToWithdraw = amountUAH / this.UsdRate;
            if (usdToWithdraw > this.UsdAmount) {
                throw new Error("Недостатньо коштів для зняття");
            }
            this.UsdAmount = this.UsdAmount - usdToWithdraw;
            return this
        }
        usdRateToIncreaseUAH(amountUAH: number) {
            if (this.UsdAmount === 0) {
                throw new Error("Сума в доларах дорівнює нулю");
            }
            let currUAH = this.UsdAmount * this.UsdRate;
            let targetUAH = currUAH + amountUAH;
            return targetUAH / this.UsdAmount;
        }
        toString(){
            return `На рахунку: ${(this.UsdAmount * this.UsdRate).toFixed(2)} грн`;
        }
    }
    try {
        const myMoney = new TMoney(10, 40);
        document.write(`${myMoney.toString() }<br>`); 
        myMoney.addUAH(500).withdrawUAH(200);
        document.write(`${myMoney.toString()}<br>`); 

        const newRate = myMoney.usdRateToIncreaseUAH(100);
        document.write("Курс для збільшення гривень на 100: ", newRate.toFixed(2));
    } catch (err: any) {
        console.log("Сталася помилка:", err.message);
    }

}