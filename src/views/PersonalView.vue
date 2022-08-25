<template>
  <div class="layout-container">
    <AsideNavigator :menus="mypage.menus"/>
    <router-view @openNewTaskPopup="openNewTaskPopup"></router-view>
    <NewTaskPopupView :visible="mypage.newTask.popup.visible" @close="closeNewTaskPopup"/>
  </div>
</template>

<script>
import AsideNavigator from '@/components/AsideNavigator.vue'
import NewTaskPopupView from '@/views/personal/NewTaskPopupView.vue'

export default {
  name: 'PersonalView',
  components: {
    AsideNavigator,
    NewTaskPopupView
  },
  data: () => {
    return {
      mypage: {
        menus: [
          { label: '요약', uri: '/personal/overview' },
          { label: '업무목록', uri: '/personal/list' },
          { label: '진행상황별 보기', uri: '/personal/board' },
          { label: '시간대별 보기', uri: '/personal/timeline' }
        ],
        newTask: {
          popup: {
            visible: false
          }
        }
      }
    }
  },
  methods: {
    openNewTaskPopup: function () {
      this.mypage.newTask.popup.visible = true
    },
    closeNewTaskPopup: function () {
      this.mypage.newTask.popup.visible = false
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
