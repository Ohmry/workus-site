<template>
  <div class="container">
    <header>
      <h1 @click="refresh">WORKUS</h1>
    </header>
    <main>
      현재 서비스 점검 중입니다
    </main>
  </div>
</template>

<script>
export default {
  name: 'ServerErrorView',
  methods: {
    refresh: function () {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss" scoped>
div.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;

  header {
    text-align: center;
    user-select: none;
    h1 {
      color: var(--primary-color);
      font-family: 'Yeongdo-Rg';
      font-size: 52px;
      margin: 0;
    }
  }

  main {
    align-self: center;
    font-size: 24px;
  }
}
</style>
