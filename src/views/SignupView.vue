<template>
  <div class="container">
    <header>
      <h1>WORKUS</h1>
    </header>
    <main>
      <section class="signup-form">
        <article>
          <h4>이메일 주소</h4>
          <span data-type="caption" v-if="this.form.invalidEmail">이메일의 형식이 올바르지 않습니다.</span>
          <span data-type="caption" v-if="this.form.existsEmail">이미 사용 중인 이메일 주소입니다.</span>
          <input
            ref="inputEmail"
            type="email"
            v-model="user.email"
            @change="validateUserEmail"
          />
          <!-- <span data-type="caption">이미 사용 중인 이메일 주소입니다.</span> -->
        </article>
        <article>
          <h4>비밀번호</h4>
          <input
            ref="inputPassword"
            type="password"
            v-model="user.password"
            @change="checkPasswordConfirm"
          />
        </article>
        <article>
          <h4>비밀번호 확인</h4>
          <input
            ref="inputPasswordConfirm"
            type="password"
            v-model="user.passwordConfirm"
            @change="checkPasswordConfirm"
          />
          <span data-type="caption" v-if="!form.equalsPassword"
            >비밀번호가 올바르지 않습니다.</span
          >
        </article>
        <article>
          <h4>사용자 이름</h4>
          <input ref="inputName" type="text" v-model="user.name" />
        </article>
      </section>
      <button class="btn-signup" @click="signup">등록</button>
      <a data-type="link" href="/">이미 계정을 갖고 계신가요?</a>
    </main>
  </div>
</template>

<script>
export default {
  name: 'SignupView',
  data: () => {
    return {
      user: {
        email: '',
        password: '',
        passwordConfirm: '',
        name: ''
      },
      form: {
        invalidEmail: false,
        existsEmail: false,
        equalsPassword: true
      }
    }
  },
  methods: {
    validate: function () {
      const view = this

      if (this.user.email.length < 1) {
        this.$alert({
          contents: '이메일 주소를 입력해주세요',
          callback: () => {
            view.$refs.inputEmail.focus()
          }
        })
        return false
      }
      if (this.user.password.length < 1) {
        this.$alert({
          contents: '비밀번호를 입력해주세요.',
          callback: () => {
            view.$refs.inputPassword.focus()
          }
        })
        return false
      }
      if (this.user.passwordConfirm.length < 1) {
        this.$alert({
          contents: '비밀번호 확인란을 입력해주세요.',
          callback: () => {
            view.$refs.inputPasswordConfirm.focus()
          }
        })
        return false
      }
      if (!this.form.equalsPassword) {
        this.$alert({
          contents: '비밀번호와 비밀번호 확인의 값이 동일하지 않습니다.',
          callback: () => {
            view.$refs.inputPasswordConfirm.focus()
          }
        })
        return false
      }
      if (this.user.name.length < 1) {
        this.$alert({
          contents: '사용자 이름을 입력해주세요.',
          callback: () => {
            view.$refs.inputName.focus()
          }
        })
        return false
      }
      return true
    },
    signup: function () {
      if (this.validate() === false) return
      this.$api
        .post('/api/signup', JSON.stringify(this.user))
        .then((response) => {
          this.$alert({
            title: '사용자 등록 완료',
            contents:
              '사용자 등록이 완료되었습니다. 로그인 화면으로 이동합니다.',
            callback: () => this.$router.replace('/')
          })
        })
        .catch((err) => {
          this.$alert({
            title: '사용자 등록 오류 (' + err.code + ')',
            contents: err.message
          })
        })
    },
    checkPasswordConfirm: function () {
      if (this.user.passwordConfirm === '') {
        this.form.equalsPassword = true
        return
      }
      const view = this
      const equals = this.user.password === this.user.passwordConfirm
      setTimeout(() => {
        view.form.equalsPassword = equals
      }, 500)
    },
    validateUserEmail: function () {
      const emailRegex = /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
      if (this.user.email && !emailRegex.test(this.user.email)) {
        this.form.invalidEmail = true
      } else {
        this.form.invalidEmail = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  user-select: none;

  header {
    text-align: center;
    h1 {
      color: var(--primary-color);
      font-family: 'Yeongdo-Rg';
      font-size: 52px;
      margin: 0;
    }
  }

  main {
    width: 400px;
    padding: 0 30px 30px 30px;
    align-self: center;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
    -webkit-box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
    -moz-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
    -o-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
    -ms-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);

    article {
      margin: 40px 0 0 0;
      svg {
        align-self: center;
        margin: 0 15px 0 0;
        font-size: 18px;
      }
      h4 {
        margin: 0 10px 0 5px;
        display: inline-block;
      }
      input {
        outline: 0;
        border: 0;
        border-bottom: 1px solid #C9C9C9;
        background-color: transparent;
        padding: 10px 5px;
        width: 380px;
      }
      span[data-type=caption] {
        font-size: 14px;
        color: var(--primary-color);
      }
    }

    /** 사용자 등록 버튼 */
    button.btn-signup {
      border: 0;
      background-color: var(--primary-color);
      color: white;
      width: 400px;
      padding: 15px;
      font-size: 18px;
      border-radius: 5px;
      margin: 30px 0 20px 0;
      &:hover {
        cursor: pointer;
      }
      &:active {
        background-color: var(--secondary-color);
      }
    }

    a[data-type='link'] {
      font-size: 14px;
    }
  }
}
</style>
