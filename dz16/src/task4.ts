if (confirm('Почати тестування?')) {

    type StockItem = {
        name: string;
        count: number;
    }

    class Store {
        #stock: StockItem[]
        #revenue: number
        constructor() {
            this.#stock = [],
                this.#revenue = 0
        }
        get Stock() {
            return [...this.#stock]
        }
        get Revenue() {
            return this.#revenue
        }
        addItem(name: string, count: number) {
            if (count <= 0) throw new Error("Кількість має бути додатньою");
            const item = this.#stock.find(obj => obj.name === name)
            if (item) item.count += count
            else this.#stock.push({ name, count })
        }
        sellItem(name: string, count: number, price: number) {
            if (count <= 0) throw new Error("Кількість має бути додатным числом");
            if (price <= 0) throw new Error("Ціна має бути додатньою");

            const item = this.#stock.find(obj => obj.name === name)
            if (!item) throw new Error(`Товар "${name}" відсутній на складі`);
            if (item.count < count) throw new Error(`Немає достатньо товару "${name}" на складі`);
            item.count -= count
            this.#revenue += count * price
            if (item.count === 0) this.#stock = this.#stock.filter(obj => obj.name !== name)
        }
        toString() {
            if (this.#stock.length === 0) {
                return `Магазин пустий. Заробіток: ${this.#revenue} грн.`;
            }
            const stockStore = this.#stock.map(item => `Товар: ${item.name}, к-сть: ${item.count}<br>`).join('\n')
            return `${stockStore}\nЗаробіток: ${this.#revenue} грн`
        }
    }
    const myStore = new Store();

    try {
        myStore.addItem('Книга', 8)
        myStore.addItem('Хліб', 3)
        myStore.addItem('Круасан', 5)

        myStore.sellItem('Книга', 3, 100)
        myStore.sellItem('Хліб', 2, 30)
        myStore.sellItem('Круасан', 2, 50)
    } catch (error: any) {
        console.log('Error', error.message);
    }

    document.write(myStore.toString());

}