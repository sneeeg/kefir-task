<template>
  <div class="catalog-item">
    <router-link :to="'/product/' + props.guid " class="catalog-item">
      <div class="catalog-item-image">
        <img :src="props.image" alt="image">
      </div>
      <div class="catalog-item-body">
        <h3>{{ props.name }}</h3>
        <p>{{ props.price }} ETH</p>
      </div>
    </router-link>
    <button class="catalog-item-button" @click="cartStore.addItem(props)" v-if="!isInCart">
      Добавить в корзину
    </button>
    <router-link to="/cart" class="catalog-item-button" v-else>
      В корзине
    </router-link>
  </div>
</template>

<script setup>
import {useCartStore} from "~/store/cart.js";

const cartStore = useCartStore()
const props = defineProps({
  guid: {
    type: String,
    default: '#'
  },
  image: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: '0'
  }
})
const isInCart = computed(() => cartStore.items.some(i => i.guid === props.guid))
</script>

<style lang="scss">
.catalog-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #232323;
  background-color: #fff;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 2px 2px 10px 0 rgba(97, 105, 112, 0.1);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    .catalog-item-image {
      img {
        transform: scale(1.2);
      }
    }
    .catalog-item-button {
      bottom: 0;
    }
  }
  &-image {
    height: 260px;
    overflow: hidden;
    img {
      transition: .3s;
    }
  }
  &-body {
    padding: 1rem;
    h3 {
      cursor: pointer;
    }
    p {
      margin-top: 4px;
      font-weight: 500;
      cursor: pointer;
    }
  }
  &-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -40px;
    left: 0;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    background-color: #007aff;
    transition: .2s;
    &:hover {
      background-color: #4b9eff;
    }
  }
}
</style>