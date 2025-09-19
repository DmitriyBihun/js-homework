"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Store_stock, _Store_revenue;
if (confirm('Почати тестування?')) {
    class Store {
        constructor() {
            _Store_stock.set(this, void 0);
            _Store_revenue.set(this, void 0);
            __classPrivateFieldSet(this, _Store_stock, [], "f"),
                __classPrivateFieldSet(this, _Store_revenue, 0, "f");
        }
        get Stock() {
            return [...__classPrivateFieldGet(this, _Store_stock, "f")];
        }
        get Revenue() {
            return __classPrivateFieldGet(this, _Store_revenue, "f");
        }
        addItem(name, count) {
            if (count <= 0)
                throw new Error("Кількість має бути додатньою");
            const item = __classPrivateFieldGet(this, _Store_stock, "f").find(obj => obj.name === name);
            if (item)
                item.count += count;
            else
                __classPrivateFieldGet(this, _Store_stock, "f").push({ name, count });
        }
        sellItem(name, count, price) {
            if (count <= 0)
                throw new Error("Кількість має бути додатным числом");
            if (price <= 0)
                throw new Error("Ціна має бути додатньою");
            const item = __classPrivateFieldGet(this, _Store_stock, "f").find(obj => obj.name === name);
            if (!item)
                throw new Error(`Товар "${name}" відсутній на складі`);
            if (item.count < count)
                throw new Error(`Немає достатньо товару "${name}" на складі`);
            item.count -= count;
            __classPrivateFieldSet(this, _Store_revenue, __classPrivateFieldGet(this, _Store_revenue, "f") + count * price, "f");
            if (item.count === 0)
                __classPrivateFieldSet(this, _Store_stock, __classPrivateFieldGet(this, _Store_stock, "f").filter(obj => obj.name !== name), "f");
        }
        toString() {
            if (__classPrivateFieldGet(this, _Store_stock, "f").length === 0) {
                return `Магазин пустий. Заробіток: ${__classPrivateFieldGet(this, _Store_revenue, "f")} грн.`;
            }
            const stockStore = __classPrivateFieldGet(this, _Store_stock, "f").map(item => `Товар: ${item.name}, к-сть: ${item.count}<br>`).join('\n');
            return `${stockStore}\nЗаробіток: ${__classPrivateFieldGet(this, _Store_revenue, "f")} грн`;
        }
    }
    _Store_stock = new WeakMap(), _Store_revenue = new WeakMap();
    const myStore = new Store();
    try {
        myStore.addItem('Книга', 8);
        myStore.addItem('Хліб', 3);
        myStore.addItem('Круасан', 5);
        myStore.sellItem('Книга', 3, 100);
        myStore.sellItem('Хліб', 2, 30);
        myStore.sellItem('Круасан', 2, 50);
    }
    catch (error) {
        console.log('Error', error.message);
    }
    document.write(myStore.toString());
}
