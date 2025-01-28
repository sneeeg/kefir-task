<template>
  <BaseContainer>
    <section class="contacts-form">
      <h2>Оставить заявку на обратный звонок</h2>

      <div class="form-row">
        <div class="form-group">
          <label for="name">Ваше имя</label>
          <input id="name" type="text" placeholder="Иванов Иван">
        </div>
        <div class="form-group">
          <label for="tel">Ваш номер телефона</label>
          <input id="tel" type="text" placeholder="+7(999)999-99-99">
        </div>
      </div>
      <div class="form-group">
        <label for="body">Текст вашего обращения</label>
        <textarea name="" id="body" cols="30" rows="10"></textarea>
      </div>
      <button class="form-button">Отправить</button>
    </section>
  </BaseContainer>
</template>

<style lang="scss">
.contacts-form {
  margin: 2rem 0;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 2px 2px 10px 0 rgba(97, 105, 112, 0.3);

  .form-row {
    margin: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    label {
      margin-bottom: 8px;
      margin-left: 8px;
      font-size: 14px;
    }

    input, textarea {
      padding: 1rem;
      border: 2px solid #e7e7e7;
      border-radius: 1rem;
      resize: none;
      transition: .2s;

      &:focus {
        border-color: #1e1e1e;
      }
    }
  }

  .form-button {
    margin-top: 1rem;
    padding: 1rem 2rem;
    font-weight: 500;
    color: #fff;
    background: #007aff;
    border-radius: 1rem;
    transition: .3s;

    &:hover {
      opacity: .5;
    }
  }
}
</style>