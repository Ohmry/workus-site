<template>
  <div class="container">
    <AsideNavigator v-if="menu.visible" :menus="menu.items" />
    <router-view></router-view>
  </div>
</template>

<script>
import BaseView from '@/components/BaseView'
import AsideNavigator from '@/components/AsideNavigator.vue'

export default {
  name: 'ProjectView',
  mixins: [BaseView],
  components: {
    AsideNavigator
  },
  data: () => {
    return {
      detail: {
        regex: /\/project\/(\d)+/
      },
      menu: {
        visible: true,
        items: [
          { label: '목록', uri: '/project' },
          { label: '프로젝트 만들기', uri: '/project/create' }
        ]
      }
    }
  },
  methods: {
    onViewUpdate: function (path) {
      this.menu.visible = path.match(this.detail.regex) === null
    }
  },
  updated: function () {
    this.onViewUpdate(this.$router.currentRoute.path)
  },
  mounted: function () {
    this.onViewUpdate(this.$router.currentRoute.path)
  }
}
</script>

<style lang="scss" scoped>

</style>
