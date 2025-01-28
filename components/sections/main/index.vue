<template>
  <section class="section-main">
    <BaseContainer>
      <div class="section-main-container">
        <h1 class="section-main-title">NFT Marketplace</h1>
        <p class="section-main-description">
          Наш маркетплейс предлагает вам возможность приобрести,
          продать и коллекционировать редкие цифровые произведения искусства, музыку,
          видео и другие уникальные токены (NFT).
          Мы создаем пространство, где каждый может стать частью цифрового будущего,
          участвуя в создании и обмене невзаимозаменяемых токенов.
          Присоединяйтесь к сообществу энтузиастов и начните свою коллекцию прямо сейчас!
        </p>
        <button class="section-main-button">
          К покупкам
        </button>
      </div>
    </BaseContainer>
  </section>
</template>

<style lang="scss">
.section-main{
  &-container {
    padding: 12rem 4rem;
    background-image: linear-gradient(to top, rgba(0,0,0, 0.6) 0 100%), url("/img/bg.jpg");
    background-size: cover;
    color: #fff;
    border-radius: 2rem;
  }
  &-title {
    font-size: 48px;
  }
  &-description {
    margin-top: 2rem;
    max-width: 60%;
    line-height: 22px;
  }
  &-button {
    margin-top: 2rem;
    padding: 1rem 3rem;
    background: #fff;
    color: #333;
    font-weight: 500;
    border-radius: 1rem;
    transition: .3s;

    &:hover {
      opacity: .5;
    }
  }
}
</style>