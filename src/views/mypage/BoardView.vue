<template>
  <div class="container">
    <header>
      <h2>진행상황별 보기</h2>
    </header>
    <main>
      <section class="card-container">
        <h4>예정</h4>
        <div>

        </div>
      </section>
      <section class="card-container">
        <h4>진행중</h4>
        <div>

        </div>
      </section>
      <section class="card-container">
        <h4>완료</h4>
        <div>

        </div>
      </section>
      <section class="card-container">
        <h4>보류</h4>
        <div>

        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BoardView'
}
</script>

<style lang="scss" scoped>
div.container {
  padding: 10px 30px;
  background-color: #FFFFFF;
  header {
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 50px;
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
    display: flex;
    flex-direction: row;

    section.card-container {
      width: 280px;
      min-height: 600px;
      text-align: center;
      margin: 0 0 0 20px;

      h4 {
        margin: 0;
        padding: 10px 0;
      }

      div {
        width: 100%;
        min-height: 400px;
        border: 1px solid black;
        border-radius: 10px;
      }
    }
  }
}
</style>
