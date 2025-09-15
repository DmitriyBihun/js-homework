if (confirm('Почати тестування?')) {

    class DanceDirector {

        boysArr: string[];
        girlsArr: string[];

        constructor(boysList: string[], girlsList: string[]) {
            this.boysArr = boysList;
            this.girlsArr = girlsList;
        }
        chooseBoy() {
            const randomBoy = Math.floor(Math.random() * this.boysArr.length);
            return this.boysArr[randomBoy]
        }
        chooseGirl() {
            const randomGirl = Math.floor(Math.random() * this.girlsArr.length);
            return this.girlsArr[randomGirl]
        }
        showPair(): void {
            document.write(`${this.chooseBoy()} - ${this.chooseGirl()}<br>`)
        }
        run(): void {
            let result = setInterval(() => {
                this.showPair()
            }, 2000);

            setTimeout(() => {
                clearInterval(result)
            }, 30000);
        }
    }

    document.write(`Випадковы пари:`)

    const boysArray = ['Dmytro', 'Vitaliy', 'Oleksandr', 'Mykola', 'Ihor', 'Bohdan', 'Serhiy', 'Nazar', 'Oleh'];
    const girlsArray = ['Oksana', 'Daria', 'Kate', 'Vira', 'Olha', 'Natali', 'Liza', 'Tamara', 'Violetta']

    const danceDirector = new DanceDirector(boysArray, girlsArray);

    danceDirector.run()

}