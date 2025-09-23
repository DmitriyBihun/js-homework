"use strict";
if (confirm('Почати тестування?')) {
    class ServiceCar {
        constructor(initDriver, initBrand, initNumber) {
            if (ServiceCar.singletonObj) {
                return ServiceCar.singletonObj;
            }
            this.driver = initDriver;
            this.brand = initBrand;
            this.number = initNumber;
            ServiceCar.singletonObj = this;
        }
        toString() {
            return `Водій: ${this.driver}, марка: ${this.brand}, номер: ${this.number}`;
        }
    }
    ServiceCar.singletonObj = null;
    const car1 = new ServiceCar('Dmytro', 'Toyota', 'AA1234BB');
    const car2 = new ServiceCar('Alex', 'Jeep', 'AA5678BB');
    document.write(`${car1.toString()}<br>`);
    document.write(`${car2.toString()}<br>`);
    console.log(car1 === car2);
}
