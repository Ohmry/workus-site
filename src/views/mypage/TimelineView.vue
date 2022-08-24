<template>
  <div class="container">
    <header>
      <h2>시간대별 보기</h2>
    </header>
    <main>
      This is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is mainThis is main
    </main>
  </div>
</template>

<script>
export default {
  name: 'TimelineView'
}
</script>

<style lang="scss" scoped>
div.container {
  padding: 10px 30px;
  background-color: #FFFFFF;
  overflow: auto;

  header {
    display: flex;
    flex-direction: row;
    position: sticky;
    left: 0;
    height: 60px;
    line-height: 60px;
    background-color: #FFFFFF;
    h2 {
      color: var(--primary-color);
      margin: 0;
      flex-grow: 1;
    }
  }

  main {
    width: 2024px;
  }
}
</style>
