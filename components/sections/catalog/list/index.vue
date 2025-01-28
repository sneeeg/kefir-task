<template>
  <div class="catalog-list">
    <SectionsCatalogListItem v-for="item in items"
                             :guid="item.guid"
                             :image="item.image"
                             :name="item.name"
                             :price="item.price"
    />
  </div>
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
  },
  {
    guid: "ac7d4d5a-4bad-469a-ba56-fc75c69f99ec",
    name: "Penguin #2",
    image: "/img/penguin-2.png",
    price: "2.16",
    category: "Penguin"
  },
  {
    guid: "b918f065-0e5c-49cb-b001-3656b6efb8a2",
    name: "Penguin #3",
    image: "/img/penguin-3.png",
    price: "4.79",
    category: "Penguin"
  },
  {
    guid: "1408d4b4-287f-4909-a882-ba3aac7533f9",
    name: "Monkey #1",
    image: "/img/monkey-1.png",
    price: "0.21",
    category: "Monkey"
  },
  {
    guid: "80835fd6-6dcd-46a0-aa01-79b357341aeb",
    name: "Monkey #2",
    image: "/img/monkey-2.png",
    price: "0.45",
    category: "Monkey"
  },
  {
    guid: "2f87e673-3c1d-47c0-8846-b3eb219a9a2f",
    name: "Monkey #3",
    image: "/img/monkey-3.png",
    price: "4.14",
    category: "Monkey"
  },
  {
    guid: "d4594852-0d5b-48bc-8ba9-ae658f05d416",
    name: "Monkey #4",
    image: "/img/monkey-4.png",
    price: "0.07",
    category: "Monkey"
  },
  {
    guid: "e4652da3-2d50-4f8e-8c98-5a43f47d8920",
    name: "Monkey #5",
    image: "/img/monkey-5.png",
    price: "0.37",
    category: "Monkey"
  }
])
</script>

<style lang="scss">
.catalog-list {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 18px;
  row-gap: 24px;
}
</style>