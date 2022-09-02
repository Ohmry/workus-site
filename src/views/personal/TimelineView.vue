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
      fromMonth: '',
      toMonth: '',
      tasks: []
    }
  },
  beforeMount: function () {
    this.tasks = []
    this.fromMonth = ''
    this.toMonth = ''
    this.$store.state.tasks.forEach(task => {
      task.isSubTask = false
      task.hasSubTask = true
      console.log(this.fromMonth, task.startDate)
      if (this.fromMonth === '') {
        this.fromMonth = task.startDate
      } else if (parseInt(this.fromMonth) > parseInt(task.startDate)) {
        this.fromMonth = task.startDate
      }
      if (this.toMonth === '') {
        this.toMonth = task.endDate
      } else if (parseInt(this.toMonth) > parseInt(task.endDate)) {
        this.toMonth = task.endDate
      }
      this.tasks.push(task)
      if (Array.isArray(task.subTasks) && task.subTasks.length > 0) {
        task.subTasks.forEach(subTask => {
          subTask.isSubTask = true
          subTask.hasSubTask = false
          this.tasks.push(subTask)
        })
      }
    })
    this.fromMonth = this.fromMonth.substring(0, 6)
    this.toMonth = this.toMonth.substring(0, 6)
  },
  mounted: function () {
    // this.$refs.container.scrollTo(300, 0)
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
