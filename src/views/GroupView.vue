<template>
  <div class="container">
    <AppNavigator />
    <header>
      <h2>그룹</h2>
      <button>그룹 생성</button>
    </header>
    <main>
      <ul>
        <li v-for="(group, index) in groups" :key="index">
          <div class="group-container">
            <div class="group-info">
              <a>{{ group.name }}</a>
              <span>{{ group.description }}</span>
            </div>
            <div class="group-badge">
              <font-awesome-icon icon="fa-solid fa-book-bookmark" data-type="alarm"></font-awesome-icon>
              <span>{{ group.projectCount }}</span>
              <font-awesome-icon icon="fa-solid fa-user-group" data-type="alarm"></font-awesome-icon>
              <span>{{ group.userCount }}</span>
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue'
export default {
  name: 'GroupView',
  components: {
    AppNavigator
  },
  data: () => {
    return {
      groups: [
        { id: 1, name: '스크린개발팀', description: '새롭게 생성된 그룹입니다. 자세한 내용은 그룹을 클릭하세요.', projectCount: 3, userCount: 5 },
        { id: 1, name: '스크린개발팀', description: '새롭게 생성된 그룹입니다. 자세한 내용은 그룹을 클릭하세요.', projectCount: 0, userCount: 5 },
        { id: 1, name: '스크린개발팀', description: '새롭게 생성된 그룹입니다. 자세한 내용은 그룹을 클릭하세요.', projectCount: 0, userCount: 5 },
        { id: 1, name: '스크린개발팀', description: '새롭게 생성된 그룹입니다. 자세한 내용은 그룹을 클릭하세요.', projectCount: 0, userCount: 5 },
        { id: 1, name: '스크린개발팀', description: '새롭게 생성된 그룹입니다. 자세한 내용은 그룹을 클릭하세요.', projectCount: 0, userCount: 5 },
        { id: 1, name: '스크린개발팀', description: '새롭게 생성된 그룹입니다. 자세한 내용은 그룹을 클릭하세요.', projectCount: 0, userCount: 5 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
div.container {
  header {
    width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid var(--secondary-color);
    justify-content: space-between;

    h2 {
      color: var(--secondary-color);
      margin: 20px 0 5px 0;
      padding: 0 0 5px 10px;
    }

    button {
      align-self: center;
      border: 0;
      background-color: var(--primary-color);
      color: white;
      font-weight: normal;
      font-size: 14px;
      padding: 10px 15px;
      border-radius: 5px;

      &:hover {
        cursor: pointer;
      }
      &:active {
        background-color: var(--secondary-color);
      }
    }

  }
  main {
    width: 800px;
    margin: 0 auto;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        padding: 10px;
        border-bottom: 1px solid var(--foreground-color);

        div.group-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          div.group-info {
            a {
              font-size: 18px;
            }
            span {
              display: block;
              font-size: 14px;
              margin-top: 5px;
            }
          }
          div.group-badge {
            align-self: center;
            svg {
              font-size: 20px;
              color: var(--secondary-color);
            }
            span {
              margin: 0 10px 0 5px;
            }
          }
        }
      }
    }
  }
}
</style>
