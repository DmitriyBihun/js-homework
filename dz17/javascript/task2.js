"use strict";
if (confirm('Почати тестування?')) {
    class Reminder {
        constructor(intervalSec, message) {
            this.count = 0;
            if (Reminder.singletonObj)
                return Reminder.singletonObj;
            this.intervalSec = intervalSec;
            this.message = message;
            Reminder.singletonObj = this;
            this.timerId = setInterval(() => {
                this.count++;
                document.write(`Номер нагадування: ${this.count} - ${this.message}<br>`);
            }, this.intervalSec * 1000);
            return this;
        }
        stop() {
            clearInterval(this.timerId);
        }
        updateMessage(newMessage) {
            this.message = newMessage;
        }
    }
    Reminder.singletonObj = null;
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
