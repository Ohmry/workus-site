<template>
  <div class="container">
    <header class="container-header">
      <h2>진행상황별 보기</h2>
    </header>
    <main>
      <section class="progress-container" id="ready-container">
        <header>
          <h4>작업 예정</h4>
          <font-awesome-icon class="comment-icon" icon="fa-solid fa-plus" data-type="alarm"></font-awesome-icon>
          <span>추가</span>
        </header>
        <div class="card-container" data-role="READY">
          <BoardCard v-for="(item) in itemForReady" :key="item.id" :item="item" />
        </div>
      </section>
      <section class="progress-container">
        <header>
          <h4>작업 중</h4>
          <font-awesome-icon class="comment-icon" icon="fa-solid fa-plus" data-type="alarm"></font-awesome-icon>
          <span>추가</span>
        </header>
        <div class="card-container" data-role="PROCEED">
          <BoardCard v-for="(item) in itemForProceed" :key="item.id" :item="item" />
        </div>
      </section>
      <section class="progress-container">
        <header>
          <h4>테스트 중</h4>
          <font-awesome-icon class="comment-icon" icon="fa-solid fa-plus" data-type="alarm"></font-awesome-icon>
          <span>추가</span>
        </header>
        <div class="card-container" data-role="TESTING">
          <BoardCard v-for="(item) in itemForTesting" :key="item.id" :item="item" />
        </div>
      </section>
      <section class="progress-container">
        <header>
          <h4>배포예정</h4>
          <font-awesome-icon class="comment-icon" icon="fa-solid fa-plus" data-type="alarm"></font-awesome-icon>
          <span>추가</span>
        </header>
        <div class="card-container" data-role="BEFORE_DEPLOY">
          <BoardCard v-for="(item) in itemForBeforeDeploy" :key="item.id" :item="item" />
        </div>
      </section>
      <section class="progress-container">
        <header>
          <h4>작업 완료</h4>
          <font-awesome-icon class="comment-icon" icon="fa-solid fa-plus" data-type="alarm"></font-awesome-icon>
          <span>추가</span>
        </header>
        <div class="card-container" data-role="COMPLETED">
          <BoardCard v-for="(item) in itemForCompleted" :key="item.id" :item="item" />
        </div>
      </section>
      <section class="progress-container">
        <header>
          <h4>보류 또는 중단</h4>
          <font-awesome-icon class="comment-icon" icon="fa-solid fa-plus" data-type="alarm"></font-awesome-icon>
          <span>추가</span>
        </header>
        <div class="card-container" data-role="ABORTED">
          <BoardCard v-for="(item) in itemForCompleted" :key="item.id" :item="item" />
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
        items: [
          { id: 1, title: '모바일오더 개선', startDate: '20220801', endDate: '20220831', importance: 'HIGH', comment: 15, progress: 'READY' },
          { id: 2, title: 'ISMS 취약점 개선 조치', startDate: '20220801', endDate: '20220831', importance: 'MID', comment: 1, progress: 'PROCEED' },
          { id: 3, title: '쿠폰정책관리 기능 개선', startDate: '20220801', endDate: '20220831', comment: 5, progress: 'PROCEED' },
          { id: 4, title: '서버 TLS 버전 업데이트', startDate: '20220801', endDate: '20220831', comment: 2, progress: 'COMPLETED' },
          { id: 5, title: '모바일오더 예약 기능', startDate: '20220801', endDate: '20220831', comment: 35, progress: 'ABORTED' },
          { id: 6, title: '부티크 프라이빗 예약 오픈 기능 개발', startDate: '20220801', endDate: '20220831', comment: 2, progress: 'TESTING' }
        ]
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
  }
}
</script>

<style lang="scss" scoped>
div.container {
  background-color: #FFFFFF;
  width: fit-content;
  height: 100vh;
  overflow: auto;
  padding: 0 30px;

  header.container-header {
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 10px;
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
    min-height: 600px;

    section.progress-container {
      user-select: none;
      width: 250px;
      margin: 10px;
      min-height: calc(100vh - 170px);
      background-color: #F7F7F7;
      border-radius: 10px;
      padding: 10px;
      border: 1px solid var(--primary-color);

      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }

      header {
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

      div.card-container {
        width: 250px;
      }
    }
  }
}
</style>
