<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.container {
  width: 1440px;
  max-width: 90%;
  margin: 0 auto;

  @media (max-width: 576px) {
    width: 100%;
    padding: 0 14px;
  }
}
</style>