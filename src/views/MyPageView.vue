<template>
  <div class="layout-container">
    <AsideNavigator :menus="mypage.menus"/>
    <router-view></router-view>
  </div>
</template>

<script>
import BaseView from '@/components/BaseView'
import AsideNavigator from '@/components/AsideNavigator.vue'

export default {
  name: 'MyPageView',
  mixins: [BaseView],
  components: {
    AsideNavigator
  },
  data: () => {
    return {
      mypage: {
        menus: [
          { label: '요약', uri: '/personal/overview' },
          { label: '업무목록', uri: '/personal/list' },
          { label: '진행상황별 보기', uri: '/personal/board' },
          { label: '시간대별 보기', uri: '/personal/timeline' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
aside.aside-navigator {
  position: sticky;
  top: 50px;
  min-height: calc(100vh - 50px);
  align-self: flex-start;
}
</style>
