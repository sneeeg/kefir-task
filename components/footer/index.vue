<template>
  <footer class="footer">
    <BaseContainer>
      <div class="footer-container">
        <IconsLogo />
        <div class="footer-links">
          <a href="#">Пользовательское соглашение</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </div>
    </BaseContainer>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: 3rem;
  background-color: #1e1e1e;
  color: #fff;
  &-container {
    display: flex;
    justify-content: space-between;
  }
  &-links {
    a {
      color: #bbbbbb;
      text-decoration: underline;
      transition: .3s;
      &:hover {
        opacity: .5;
      }
      &:not(:first-child) {
        margin-top: 1rem;
      }
    }
  }
}
</style>