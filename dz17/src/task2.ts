if (confirm('Почати тестування?')) {

    class Reminder {
        private static singletonObj: Reminder | null = null;
        private timerId!: ReturnType<typeof setInterval>;
        private count: number = 0;
        private intervalSec!: number;
        private message!: string;

        constructor(intervalSec: number, message: string) {
            if (Reminder.singletonObj) return Reminder.singletonObj;

            this.intervalSec = intervalSec;
            this.message = message;

            Reminder.singletonObj = this;

            this.timerId = setInterval(() => {
                this.count++;
                document.write(`Номер нагадування: ${this.count} - ${this.message}<br>`);
            }, this.intervalSec * 1000);

            return this;
        }

        stop(): void {
            clearInterval(this.timerId);
        }

        updateMessage(newMessage: string): void {
            this.message = newMessage;
        }
    }
    
    const r1 = new Reminder(2, 'Привіт.');
    const r2 = new Reminder(1, 'Salut!');

    console.log(r1 === r2);

    setTimeout(() => {
        r1.updateMessage('Час випити чашечку кави.');
    }, 5000);

    setTimeout(() => {
        r1.stop();
    }, 16000);


}