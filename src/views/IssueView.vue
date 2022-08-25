<template>
  <div class="container">
    <AsideNavigator v-if="menu.visible" :menus="menu.items" />
    <router-view></router-view>
  </div>
</template>

<script>
import AsideNavigator from '@/components/AsideNavigator.vue'

export default {
  name: 'IssueView',
  components: {
    AsideNavigator
  },
  data: () => {
    return {
      detail: {
        regex: /\/issue\/(\d)+/
      },
      menu: {
        visible: true,
        items: [
          { label: '목록', uri: '/issue' }
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
