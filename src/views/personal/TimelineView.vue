<template>
  <div class="container">
    <header>
      <h2>시간대별 보기</h2>
    </header>
    <main>
      <TimelineFragment :fromMonth="this.fromMonth" :toMonth="this.toMonth" />
    </main>
  </div>
</template>

<script>
import TimelineFragment from './Timeline/TimelineFragment.vue'

export default {
  name: 'TimelineView',
  components: {
    TimelineFragment
  },
  data: () => {
    return {
      fromMonth: '202201',
      toMonth: '202210',
      tasks: []
    }
  },
  methods: {
    change: function (e) {
      this.fromMonth = '202209'
    }
  }
}
</script>

<style lang="scss" scoped>
div.container {
  background-color: #FFFFFF;
  height: calc(100vh - 50px);
  overflow: auto;

  header {
    padding: 10px 30px 0 30px;
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
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
    white-space: nowrap;
  }
}
</style>
