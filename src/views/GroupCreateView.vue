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
        <input
          type="text"
          v-model="group.name"
          placeholder="새로운 그룹의 이름"
        />
      </article>
      <article>
        <h3>그룹 설명</h3>
        <span data-type="caption">(선택)</span>
        <input
          type="text"
          v-model="group.description"
          placeholder="새로운 그룹에 대한 설명"
        />
      </article>
      <button @click="createGroup">등록</button>
    </main>
  </div>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue'
export default {
  name: 'GroupCreateView',
  components: {
    AppNavigator
  },
  data: () => {
    return {
      group: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    createGroup: function (e) {
      this.$api
        .post('/api/group', JSON.stringify(this.group))
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          if (err.code === -997) {
            this.$alert({
              title: '그룹 생성 오류',
              contents: '세션이 끊겼습니다. 로그인 후 다시 시도해주세요.',
              callback: () => {
                sessionStorage.removeItem('user')
                this.$router.replace('/')
              }
            })
          }
        })
    }
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
        color: #6b6b6b;
      }
    }

    article {
      margin: 40px 0;
      height: 80px;

      h3 {
        margin: 0 0 5px 0;
        padding: 0 0px;
        display: inline-block;
      }
      span[data-type='caption'] {
        font-size: 14px;
        color: #6b6b6b;
        margin: 0 0 0 10px;
      }
      input {
        outline: 0;
        border: 0;
        width: 390px;
        border-bottom: 1px solid #6b6b6b;
        background-color: transparent;
        margin: 15px 0 0 0;
        padding: 10px 5px;
        display: block;
      }
    }

    button {
      border: 0;
      background-color: var(--primary-color);
      color: white;
      width: 400px;
      font-size: 16px;
      padding: 10px;
      border-radius: 5px;
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
