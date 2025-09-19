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
var _Backpack_weight, _Backpack_items;
if (confirm('Почати тестування?')) {
    class Backpack {
        constructor() {
            _Backpack_weight.set(this, void 0);
            _Backpack_items.set(this, void 0);
            __classPrivateFieldSet(this, _Backpack_weight, 0, "f"),
                __classPrivateFieldSet(this, _Backpack_items, [], "f");
        }
        get Weight() {
            return __classPrivateFieldGet(this, _Backpack_weight, "f");
        }
        get Items() {
            return [...__classPrivateFieldGet(this, _Backpack_items, "f")];
        }
        addItem(itemName, itemWeight) {
            if (itemWeight <= 0)
                throw new Error("Вага має бути додатным числом");
            if ((this.Weight + itemWeight) > 10)
                throw new Error(`Не можна додати предмет "${itemName}", перевищує максимальну вагу 10 кг`);
            __classPrivateFieldGet(this, _Backpack_items, "f").push(itemName);
            __classPrivateFieldSet(this, _Backpack_weight, __classPrivateFieldGet(this, _Backpack_weight, "f") + itemWeight, "f");
        }
        toString() {
            return `Рюкзак: [${this.Items.join(', ')}], вага: ${this.Weight} кг`;
        }
    }
    _Backpack_weight = new WeakMap(), _Backpack_items = new WeakMap();
    const myBackpack = new Backpack();
    try {
        myBackpack.addItem('Наушники', 1);
        myBackpack.addItem('Шапка', 1);
        myBackpack.addItem('Книга', 1.5);
        myBackpack.addItem('Ноутбук', 2);
        myBackpack.addItem('Палатка', 5);
    }
    catch (error) {
        console.log('Error', error.message);
    }
    document.write(`${myBackpack.toString()}<br>`);
}
