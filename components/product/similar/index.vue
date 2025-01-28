<template>
  <BaseContainer class="similar">
    <h4 class="similar-title">Похожие товары</h4>
    <div class="similar-row">
      <SectionsCatalogListItem v-for="item in items"
                               :guid="item.guid"
                               :image="item.image"
                               :name="item.name"
                               :price="item.price"
      />
    </div>
  </BaseContainer>
</template>

<script setup>
const items = ref([
  {
    guid: "c55242f5-0c74-4385-8a56-7ac4bb0386fa",
    name: "Bean #1",
    image: "/img/bean-1.png",
    price: "0.40",
    category: "Bean"
  },
  {
    guid: "c5ae9df4-8540-4373-85d7-fc7803bff6c2",
    name: "Dragon #1",
    image: "/img/dragon-1.png",
    price: "0.94",
    category: "Dragon"
  },
  {
    guid: "d63cd660-557a-4a8c-8b45-61a48bd69c7c",
    name: "Dragon #2",
    image: "/img/dragon-2.png",
    price: "0.0014",
    category: "Dragon"
  },
  {
    guid: "496eb682-bdd3-4c8f-a9aa-b7260dfa9b11",
    name: "Dragon #3",
    image: "/img/dragon-3.png",
    price: "0.11",
    category: "Dragon"
  },
  {
    guid: "bf3465db-1d94-4355-ae2c-41ac9b3ca533",
    name: "Penguin #1",
    image: "/img/penguin-1.png",
    price: "1.27",
    category: "Penguin"
  }
])
</script>

<style lang="scss">
.similar {
  padding: 6rem 0;
  &-title {
    font-size: 32px;
  }
  &-row {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 18px;
  }
}
</style>