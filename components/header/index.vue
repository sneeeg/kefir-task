<template>
  <header class="header">
    <BaseContainer>
      <div class="header-container">
        <router-link to="/" class="header-logo">
          <IconsLogo />
        </router-link>
        <nav>
          <ul class="header-menu">
            <li class="header-menu-item">
              <router-link to="/">Каталог</router-link>
            </li>
            <li class="header-menu-item">
              <router-link to="/contacts">Контакты</router-link>
            </li>
            <li class="header-menu-item">
              <router-link to="/cart">Корзина</router-link>
            </li>
          </ul>
        </nav>
        <div class="header-cart">
          <span class="header-cart-counter">{{ cartStore.totalQuantity }}</span>
          <router-link to="/cart">
            <IconsCart />
          </router-link>
        </div>
      </div>
    </BaseContainer>
  </header>
</template>

<script setup>
import {useCartStore} from "~/store/cart.js";

const cartStore = useCartStore()
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  z-index: 1;
  &-container {
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
  }
  &-menu {
    display: flex;
    gap: 2rem;

    &-item {
      font-weight: 500;
      color: #333;

      a {
        color: #333;
      }
    }
  }
  &-cart {
    position: relative;
    color: #333;
    a {
      color: #333;
    }
    &-counter {
      top: -10px;
      right: -7px;
      background-color: #fff;
      position: absolute;
      font-size: 12px;
      font-weight: 600;
    }
  }
}
</style>