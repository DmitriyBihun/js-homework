if (confirm('Почати тестування?')) {
    class Backpack {
        #weight: number
        #items: string[]
        constructor() {
            this.#weight = 0,
                this.#items = []
        }
        get Weight() {
            return this.#weight
        }
        get Items() {
            return [...this.#items]
        }
        addItem(itemName: string, itemWeight: number) {
            if (itemWeight <= 0) throw new Error("Вага має бути додатным числом");
            if ((this.Weight + itemWeight) > 10) throw new Error(`Не можна додати предмет "${itemName}", перевищує максимальну вагу 10 кг`);
            this.#items.push(itemName)
            this.#weight += itemWeight
        }
        toString() {
            return `Рюкзак: [${this.Items.join(', ')}], вага: ${this.Weight} кг`
        }
    }

    const myBackpack = new Backpack();
    try {
        myBackpack.addItem('Наушники', 1)
        myBackpack.addItem('Шапка', 1)
        myBackpack.addItem('Книга', 1.5)
        myBackpack.addItem('Ноутбук', 2)
        myBackpack.addItem('Палатка', 5)
    } catch (error: any) {
        console.log('Error', error.message);
    }
    document.write(`${myBackpack.toString()}<br>`);
}