<template>
  <div class="container">
    <AppNavigator />
    <main>
      <header>
        <h2>새로운 그룹 만들기</h2>
        <span>프로젝트를 묶어서 관리할 수 있는 그룹을 생성합니다.</span>
      </header>
      <article>
        <h3>그룹 이름</h3>
        <span data-type="caption">그룹의 이름을 입력해주세요.</span>
        <input type="text" />
      </article>
      <article>
        <h3>그룹 설명</h3>
        <span data-type="caption">그룹에 대한 설명을 입력해주세요.</span>
        <input type="text" placeholder="선택사항" />
      </article>
      <button>등록</button>
    </main>
  </div>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue'
export default {
  name: 'GroupCreateView',
  components: {
    AppNavigator
  }
}
</script>

<style lang="scss" scoped>
div.container {
  display: flex;
  flex-direction: column;

  main {
    width: 400px;
    align-self: center;

    header {
      text-align: left;
      margin: 40px 0 0 0;

      h2 {
      margin: 20px 0 5px 0;
      }
      span {
        font-size: 14px;
        color: #6B6B6B;
      }
    }

    article {
      margin: 40px 0;
      height: 80px;

      h3 {
        margin: 0 0 5px 0;
        padding: 0 0px;
      }
      input {
        outline: 0;
        border: 0;
        width: 390px;
        border-bottom: 1px solid #6B6B6B;
        background-color: transparent;
        margin: 15px 0 0 0;
        padding: 10px 5px;
      }
      span[data-type=caption] {
        font-size: 14px;
        color: #6B6B6B;
      }
    }

    button {
      border: 0;
      background-color: var(--primary-color);
      color: white;
      width: 400px;
      font-size: 16px;
      padding: 10px;
      &:hover {
        cursor: pointer;
      }
      &:active {
        background-color: var(--secondary-color);
      }
    }
  }
}
</style>
