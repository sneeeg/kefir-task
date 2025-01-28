<template>
  <BaseContainer>
    <div class="product-info-container">
      <div class="product-info-image">
        <img :src="props.item.image" alt="image">
      </div>
      <div class="product-info-content">
        <div>
          <h1>{{ props.item.name }}</h1>
          <h2>{{ props.item.price }} ETH</h2>
          <button class="buy-button" v-if="!isInCart">Добавить в корзину</button>
          <router-link to="/cart" class="buy-button" v-else>В корзине</router-link>
        </div>
        <div>
          <h3 class="product-info-description">Описание:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloremque expedita ipsa nisi,
            quisquam saepe suscipit? Adipisci blanditiis est exercitationem ipsa iure labore nemo officia optio
            perspiciatis repellendus reprehenderit, vitae.
          </p>
        </div>
        <div class="product-info-graph">
          <img src="/img/graph.png" alt="graph">
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup>
import {useCartStore} from "~/store/cart.js";

const cartStore = useCartStore()
const props = defineProps(['item'])
const isInCart = computed(() => cartStore.items.some(i => i.guid === props.item.guid))
</script>

<style lang="scss">
.product-info {
  &-container {
    margin-top: 2rem;
    display: flex;
    overflow: hidden;
    border-radius: 2rem;
    box-shadow: 2px 2px 10px 0 rgba(97, 105, 112, 0.2);
  }
  &-image {
    width: 50%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &-content {
    width: 50%;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    .buy-button{
      margin-top: 2rem;
      padding: 1rem 2rem;
      max-width: fit-content;
      font-weight: 500;
      font-size: 14px;
      color: #fff;
      background: #007aff;
      border-radius: 1rem;
      transition: .3s;

      &:hover {
        opacity: .5;
      }
    }
  }
  &-description {
    margin-top: 2rem;
  }
  &-graph {
    margin-top: 2rem;
    img {
      width: 100%;
    }
  }
}
</style>