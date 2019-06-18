<template>
  <header>
    <div>
      <router-link to="/">
        <img src="../assets/logo.svg" alt="InstaVue">
      </router-link>
      <router-link to="/new">
        <img src="../assets/camera.svg" alt="Enviar publicação">
      </router-link>
    </div>
  </header>
</template>


<style lang="scss" scoped>
header {
  background: #fff;
  height: 72px;
  border-bottom: 1px solid #ddd;

  div {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    height: 72px;
    padding: 0 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
