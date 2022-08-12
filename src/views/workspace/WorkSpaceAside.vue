<template>
  <aside>
    <header>
      <h4>내가 속한 작업공간</h4>
      <button>생성</button>
    </header>
    <section class="filter-container">
      <input type="text" placeholder="Filter" />
    </section>
    <section class="workspace-container">
      <ul>
        <li v-for="(workspace, index) in workspaces" :key="index">
          <router-link :to="{ path: '/workspace/' + workspace.id }">
            <button>{{ workspace.name }}</button>
          </router-link>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'WorkSpaceAside',
  data: () => {
    return {
      workspaces: [
        { id: 1, name: '개인 작업공간' },
        { id: 2, name: '메가박스' },
        { id: 3, name: '스크린개발팀' },
        { id: 4, name: '모바일오더 프로젝트' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  width: 200px;
  border-right: 1px solid var(--secondary-color);

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    h4 {
      margin: 0;
      padding: 0;
      color: var(--primary-color);
      font-size: 18px;
    }

    button {
      background-color: var(--primary-color);
      border: 0;
      outline: 0;
      padding: 10px;
      border-radius: 5px;
      color: white;
      font-size: 16px;

      &:hover {
        cursor: pointer;
        background-color: var(--secondary-color);
      }
      &:active {
        background-color: var(--primary-color);
      }
    }
  }

  section.filter-container {
    padding: 0 15px;
    input {
      width: calc(100% - 14px);
      padding: 5px;
      border: 1px solid var(--primary-color);
      outline: none;
    }
  }

  section.workspace-container {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        margin: 5px 0 0 0;

        a {
            button {
              width: 100%;
              border: 0;
              padding: 15px 30px;
              text-align: right;
              outline: none;
              background-color: transparent;
              color: #6B6B6B;

              &:hover {
                cursor: pointer;
                background-color: #ffcfd6;
                color: #6B6B6B;
              }
            }

            &.router-link-exact-active {
              button {
                color: white;
                background-color: var(--secondary-color);
              }
            }
          }
      }
    }
  }
}
</style>
