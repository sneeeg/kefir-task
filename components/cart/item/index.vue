<template>
  <div class="cart-item">
    <div class="cart-item-img">
      <img :src="props.image" alt="">
    </div>
    <div>
      <router-link :to="'/product/' + props.guid" class="cart-item-title">{{ props.name }}</router-link>
      <p class="cart-item-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Amet beatae debitis facere fugiat ipsum temporibus vero voluptatem.
        Animi cupiditate id itaque minus non omnis, qui quis reprehenderit sequi veniam voluptas?
      </p>
      <h3 class="cart-item-price">{{ props.price }} ETH</h3>
    </div>
    <button @click="cartStore.removeItem(props.guid)">
      <IconsTrash />
    </button>
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
</script>

<style lang="scss">
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  &:hover {
    .cart-item-img {
      img {
        transform: scale(1.1);
      }
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }

  &-img {
    width: 180px;
    height: 160px;
    margin-right: 2rem;
    overflow: hidden;
    border-radius: 1rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all .3s;
    }
  }

  &-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #141414;
    text-decoration: none;
    transition: all .3s;
    margin-bottom: 1rem;

    &:hover {
      opacity: .7;
    }
  }

  &-description {
    margin-top: 1rem;
    max-width: 80%;
  }

  &-price {
    margin-top: 1rem;
  }
}
</style>