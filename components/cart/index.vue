<template>
  <BaseContainer>
    <div class="cart">
      <div class="cart-header">
        <h1>Ваша корзина</h1>
        <button @click="cartStore.clearCart()" class="cart-header-button">Очистить все</button>
      </div>
      <div class="cart-container">
        <div class="cart-body">
          <CartItem v-for="item in cartStore.items"
                    :guid="item.guid"
                    :image="item.image"
                    :name="item.name"
                    :price="item.price" />
        </div>
        <div class="cart-footer">
          <div>
            Общая сумма: {{ cartStore.totalPrice }} ETH
          </div>
          <div>
            <button @click="cartStore.clearCart()" class="cart-footer-button">Оплатить</button>
          </div>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>

<script setup>
import {useCartStore} from "~/store/cart.js";

const cartStore = useCartStore()
</script>

<style lang="scss">
.cart {
  padding: 3rem 0;

  &-header {
    display: flex;
    justify-content: space-between;
    &-button {
      padding: 1rem 2rem;
      font-weight: 500;
      color: #141414;
      background: #fff;
      border: 1px solid #e6e6e6;
      border-radius: 1rem;
      transition: .3s;

      &:hover {
        opacity: .5;
      }
    }
  }
  &-container {
    margin-top: 1rem;
    border: 1px solid #f0f0f0;
    border-radius: 1rem;
    background: #fff;
    box-shadow: 2px 2px 10px 0 rgba(97, 105, 112, 0.2);
  }
  &-footer {
    border-top: 1px solid #f0f0f0;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-button {
      padding: 1rem 2rem;
      font-weight: 500;
      color: #fff;
      background: #007aff;
      border-radius: 1rem;
      transition: .3s;

      &:hover {
        opacity: .5;
      }
    }
  }
}
</style>