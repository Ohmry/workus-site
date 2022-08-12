<template>
  <aside>
    <header>
      <h4>내가 속한 그룹</h4>
      <button>그룹 생성</button>
    </header>
    <section class="filter-container">
      <input type="text" placeholder="Filter" />
    </section>
    <section class="group-container">
      <ul>
        <li>메가박스</li>
        <li>스크린개발팀</li>
        <li>모바일오더 프로젝트</li>
      </ul>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'GroupAside'
}
</script>

<style lang="scss" scoped>
aside {
  width: 300px;
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
}
</style>
