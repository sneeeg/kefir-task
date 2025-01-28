<template>
  <Header />
  <main>
    <slot></slot>
  </main>
  <Footer />
</template>

<script setup>
import {useCartStore} from "~/store/cart.js";
import {onMounted} from "vue";

const cartStore = useCartStore()

onMounted(() => {
  cartStore.loadFromLocalStorage()
})
</script>