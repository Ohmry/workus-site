<template>
  <div class="container">
    <header class="container-header">
      <h2>진행상황별 보기</h2>
    </header>
    <main>
      <section class="progress-container" id="ready-container">
        <header>
          <h4>작업 예정</h4>
          <font-awesome-icon class="comment-icon" icon="fa-solid fa-plus"></font-awesome-icon>
          <span>추가</span>
        </header>
        <div class="card-container" data-progress-value="READY">
          <BoardCard v-for="(item) in itemForReady" :key="item.id" :item="item" />
        </div>
      </section>
      <section class="progress-container">
        <header>
          <h4>작업 중</h4>
          <font-awesome-icon class="comment-icon" icon="fa-solid fa-plus"></font-awesome-icon>
          <span>추가</span>
        </header>
        <div class="card-container" data-progress-value="PROCEED">
          <BoardCard v-for="(item) in itemForProceed" :key="item.id" :item="item" />
        </div>
      </section>
      <section class="progress-container">
        <header>
          <h4>테스트 중</h4>
          <font-awesome-icon class="comment-icon" icon="fa-solid fa-plus"></font-awesome-icon>
          <span>추가</span>
        </header>
        <div class="card-container" data-progress-value="TESTING">
          <BoardCard v-for="(item) in itemForTesting" :key="item.id" :item="item" />
        </div>
      </section>
      <section class="progress-container">
        <header>
          <h4>배포예정</h4>
          <font-awesome-icon class="comment-icon" icon="fa-solid fa-plus"></font-awesome-icon>
          <span>추가</span>
        </header>
        <div class="card-container" data-progress-value="BEFORE_DEPLOY">
          <BoardCard v-for="(item) in itemForBeforeDeploy" :key="item.id" :item="item" />
        </div>
      </section>
      <section class="progress-container">
        <header>
          <h4>작업 완료</h4>
          <font-awesome-icon class="comment-icon" icon="fa-solid fa-plus"></font-awesome-icon>
          <span>추가</span>
        </header>
        <div class="card-container" data-progress-value="COMPLETED">
          <BoardCard v-for="(item) in itemForCompleted" :key="item.id" :item="item" />
        </div>
      </section>
      <section class="progress-container">
        <header>
          <h4>보류 또는 중단</h4>
          <font-awesome-icon class="comment-icon" icon="fa-solid fa-plus"></font-awesome-icon>
          <span>추가</span>
        </header>
        <div class="card-container" data-progress-value="ABORTED">
          <BoardCard v-for="(item) in itemForAborted" :key="item.id" :item="item" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import BoardCard from './BoardView/BoardCard.vue'
export default {
  name: 'BoardView',
  components: {
    BoardCard
  },
  data: () => {
    return {
      board: {
        items: []
      }
    }
  },
  computed: {
    itemForReady: function () {
      return this.board.items.filter(item => item.progress === 'READY')
    },
    itemForProceed: function () {
      return this.board.items.filter(item => item.progress === 'PROCEED')
    },
    itemForTesting: function () {
      return this.board.items.filter(item => item.progress === 'TESTING')
    },
    itemForBeforeDeploy: function () {
      return this.board.items.filter(item => item.progress === 'BEFORE_DEPLOY')
    },
    itemForCompleted: function () {
      return this.board.items.filter(item => item.progress === 'COMPLETED')
    },
    itemForAborted: function () {
      return this.board.items.filter(item => item.progress === 'ABORTED')
    }
  },
  methods: {
  },
  mounted: function () {
    this.board.items = this.$store.state.tasks
  }
}
</script>

<style lang="scss" scoped>
div.container {
  background-color: #FFFFFF;
  height: calc(100vh - 50px);
  overflow: auto;

  header.container-header {
    padding: 10px 30px 0 30px;
    height: 60px;
    line-height: 60px;
    background-color: #FFFFFF;
    h2 {
      color: var(--primary-color);
      margin: 0;
    }
  }

  main {
    display: flex;
    flex-direction: row;
    user-select: none;
    width: fit-content;

    section.progress-container {
      width: 250px;
      margin: 10px;
      min-height: calc(100vh - 200px);
      background-color: #F7F7F7;
      border-radius: 10px;
      padding: 10px;
      border: 1px solid var(--primary-color);

      header {
        width: 250px;
        display: flex;
        flex-direction: row;
        align-items: center;
        h4 {
          margin: 0;
          font-size: 18px;
          padding: 10px;
        }
        svg {
          font-size: 14px;
          font-weight: bold;
          color: var(--primary-color);
          padding: 0 5px 0 0;
          margin: 0 0 0 auto;
        }
        span {
          font-size: 14px;
          font-weight: bold;
          color: var(--primary-color);
          padding: 0 10px 0 0;
        }
      }
    }
  }
}
</style>
