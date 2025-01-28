import { defineStore } from 'pinia';

const LS_KEY = 'cart-items';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),

    getters: {
        totalQuantity: (state) => state.items.length,
        totalPrice: (state) => state.items.reduce((acc, item) => acc + Number(item.price), 0),
    },

    actions: {
        addItem(item) {
            this.items.push(item);
            this.saveToLocalStorage();
        },

        removeItem(guid) {
            this.items = this.items.filter((item) => item.guid !== guid);
            this.saveToLocalStorage();
        },

        clearCart() {
            this.items = [];
            this.saveToLocalStorage();
        },

        saveToLocalStorage() {
            localStorage.setItem(LS_KEY, JSON.stringify(this.items));
        },
        loadFromLocalStorage() {
            const data = localStorage.getItem(LS_KEY);
            if (data) {
                this.items = JSON.parse(data);
            } else {
                this.saveToLocalStorage(); // Можно сразу сохранить пустую корзину
            }
        },
    },

    persist: true

});