<template>
  <div class="view-wrap">
    <AppNavigator />
    <header>
      <font-awesome-icon data-type="icon" icon="fa-solid fa-cube"></font-awesome-icon>
      <a data-type="group">메가박스</a>
      <span>/</span>
      <a data-type="project">페이즈 금액권 기능 개발</a>
    </header>
    <div class="contents-wrap">
      <nav>
        <ul>
          <li>목록</li>
          <li>칸반보드</li>
          <li>간트차트</li>
        </ul>
      </nav>
      <main>
        This is main
      </main>
    </div>
  </div>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue'
export default {
  name: 'ProjectView',
  components: {
    AppNavigator
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 50px;
  border-bottom: 1px solid var(--secondary-color);
  background-color: var(--background-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;

  svg[data-type=icon] {
    color: #6B6B6B;
    font-size: 20px;
    margin: 0 10px 0 0;
  }
  a {
    color: #052EFA;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  span {
    margin: 0 5px;
  }
}
div.contents-wrap {
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 110px);
  background-color: white;

  nav {
    width: 150px;
    border-right: 1px solid var(--background-secondary-color);
    padding: 20px 0;

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        padding: 10px;
      }
    }
  }
}
</style>
