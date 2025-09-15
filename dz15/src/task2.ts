if (confirm('Почати тестування?')) {

    class Car {
        model: string;
        tankSize: number;
        avaliableLiters: number;
        seats: number;
        numbOfPassengers: number;

        constructor(initModelCar: string, initTankSize: number, initAvaliableLiters: number, initSeats: number, initNumbOfPassengers: number) {
            this.model = initModelCar,
                this.tankSize = initTankSize,
                this.avaliableLiters = initAvaliableLiters,
                this.seats = initSeats,
                this.numbOfPassengers = initNumbOfPassengers
        }

        showPassengers(): number {
            return this.numbOfPassengers
        }
        addPassengers(count: number) {
            if (this.numbOfPassengers + count <= this.seats) {
                this.numbOfPassengers += count
            }
            else {
                document.write(`Вільних місць немає.<br>`);

            }
        }
        disembarkationPassengers(count: number) {
            if (this.numbOfPassengers - count >= 0) {
                this.numbOfPassengers -= count
            }
            else {
                this.numbOfPassengers = 0
            }
        }
        refueling(numbOfLiters: number) {
            if (this.avaliableLiters + numbOfLiters <= this.tankSize) {
                this.avaliableLiters += numbOfLiters
            }
            else {
                this.avaliableLiters = this.tankSize
            }
        }
    }
    const myFirstCar = new Car('Honda', 50, 40, 4, 3);

    document.write(`Початкові пасажири: ${myFirstCar.showPassengers()}<br>`);
    document.write(`Початкове паливо: ${myFirstCar.avaliableLiters} л<br>`);
    myFirstCar.addPassengers(1);
    document.write(`Після додавання, к-сть пасажирів: ${myFirstCar.showPassengers()}<br>`);
    myFirstCar.disembarkationPassengers(3);
    document.write(`Після висадки, к-сть пасажирів: ${myFirstCar.showPassengers()}<br>`);
    myFirstCar.refueling(5);
    document.write(`Після заправки, к-сть палива: ${myFirstCar.avaliableLiters} л<br>`);

}