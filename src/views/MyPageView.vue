<template>
  <div class="container">
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
          { label: '요약', uri: '/overview' },
          { label: '업무목록', uri: '/list' },
          { label: '진행상황별 보기', uri: '/board' },
          { label: '시간대별 보기', uri: '/timeline' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
