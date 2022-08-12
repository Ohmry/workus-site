<template>
  <div class="container">
    <GroupAside />
    <router-view></router-view>
  </div>
</template>

<script>
import GroupAside from '@/views/group/GroupAside.vue'

export default {
  name: 'GroupView',
  components: {
    GroupAside
  },
  data: () => {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
