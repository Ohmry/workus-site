<template>
  <div class="container">
    <AsideNavigator :menus="mypage.menus"/>
    <router-view></router-view>
  </div>
</template>

<script>
import AsideNavigator from '@/components/AsideNavigator.vue'

export default {
  name: 'MyPageView',
  components: {
    AsideNavigator
  },
  data: () => {
    return {
      mypage: {
        menus: [
          { label: '요약', uri: '/mypage/overview' },
          { label: '업무목록', uri: '/mypage/list' },
          { label: '진행상황별 보기', uri: '/mypage/board' },
          { label: '시간대별 보기', uri: '/mypage/timeline' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
