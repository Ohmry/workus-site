<template>
  <div class="container" ref="container">
    <header>
      <h2>시간대별 보기</h2>
    </header>
    <main>
      <TimelineFragment :fromMonth="this.fromMonth" :toMonth="this.toMonth" :items="this.tasks"/>
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
  beforeMount: function () {
    this.tasks = this.$store.state.tasks
  },
  mounted: function () {
    this.$refs.container.scrollTo(300, 0)
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
    left: 0;
    height: 60px;
    line-height: 60px;
    background-color: #FFFFFF;
    z-index: 3;
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
