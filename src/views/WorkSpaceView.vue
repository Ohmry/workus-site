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
  name: 'WorkSpaceView',
  mixins: [BaseView],
  components: {
    AsideNavigator
  },
  data: () => {
    return {
      detail: {
        regex: /\/workspace\/(\d)+/
      },
      menu: {
        visible: true,
        items: [
          { label: '목록', uri: '/workspace' },
          { label: '작업공간 만들기', uri: '/workspace/create' }
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
