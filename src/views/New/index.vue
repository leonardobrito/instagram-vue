<template>
  <form>
    <input type="text">
    <input type="text" name="author" placeholder="Author">
    <input type="text" name="place" placeholder="Place">
    <input type="text" name="description" placeholder="Description">
    <input type="text" name="hashtags" placeholder="Hashtags">
    <button type="submit">Enviar</button>
  </form>
</template>

<style lang="scss" scoped>
form {
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }

  input[type='text'] {
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
  }

  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #7159c1;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
