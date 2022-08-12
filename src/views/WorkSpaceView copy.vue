<template>
  <div class="container">
    <header>
      <h2>작업공간</h2>
      <span>작업공간은 프로젝트 또는 업무를 묶어서 관리할 수 있는 하나의 단위입니다.</span>
    </header>
    <main>
      <ul>
        <li>
          <div class='workspace-container'>
            <header>
              <h3>개인 작업공간</h3>
              <span>개인 작업공간은 계정당 제공되는 기본적인 작업공간입니다.</span>
            </header>
          </div>
        </li>
        <li>
          <div class='workspace-container'>
            <header>
              <h3>개인 작업공간</h3>
              <span>개인 작업공간은 계정당 제공되는 기본적인 작업공간입니다.</span>
            </header>
          </div>
        </li>
        <li>
          <div class='workspace-container'>
            <header>
              <h3>개인 작업공간</h3>
              <span>개인 작업공간은 계정당 제공되는 기본적인 작업공간입니다.</span>
            </header>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: 'WorkSpaceView',
  data: () => {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
div.container {
  padding: 20px 30px;
  display: flex;
  flex-direction: column;

  header {
    h2 {
      display: inline-block;
      margin: 0 10px 0 0;
      padding: 0;
      color: var(--primary-color);
    }
    span {
      color: var(--foreground-color);
      font-size: 14px;
    }
  }

  main {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        div.workspace-container {
          height: 40px;
          padding: 30px 0;
          header {
            h3 {
              margin: 0 0 10px 0;
            }
          }
        }
      }
    }
  }
}
</style>
