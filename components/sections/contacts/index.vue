<template>
  <section class="contacts">
    <BaseContainer>
      <div class="contacts-container">
        <div>
          <h1>Контакты</h1>
          <a href="mailto:mail@mail.ru">mail@mail.ru</a>
          <a href="tel:+79999999999">+7 (999) 999-99-99</a>
          <p>Telegram: @tg_tg</p>
          <p>Наш адрес: г.Москва, Пресненская набережная, 6 ст2, 35 этаж, офс 3515</p>
        </div>
        <div class="contacts-map">
          <img src="/img/map.png" alt="map">
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<style lang="scss">
.contacts {
  &-container {
    display: flex;
    justify-content: space-between;
  }

  &-map {
    width: 50%;
    object-fit: contain;
    img {
      width: 100%;
    }
  }
}
</style>