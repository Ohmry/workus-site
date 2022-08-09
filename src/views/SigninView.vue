<template>
  <section class="container">
    <header>
      <h1>WORKUS</h1>
    </header>
    <main>
      <section class="signin-form">
        <div class="slide-wrap">
          <ul>
            <li :class="{ 'activate-form': isStandard }">
              <button @click="changeToStandard">일반 사용자</button>
            </li>
            <li :class="{ 'activate-form': isLdap }">
              <button @click="changeToLdap">그룹웨어 사용자</button>
            </li>
          </ul>
          <div :style="form.selector.style"></div>
        </div>
        <transition name="slide-fade">
          <article v-if="isStandard" class="standard-signin">
            <font-awesome-icon icon="fa-regular fa-user"></font-awesome-icon>
            <input
              ref="standardEmail"
              type="email"
              placeholder="이메일 주소"
              v-model="form.standard.email"
            />
            <font-awesome-icon
              icon="fa-regular fa-keyboard"
            ></font-awesome-icon>
            <input
              ref="standardPassword"
              type="password"
              placeholder="비밀번호"
              v-model="form.standard.password"
              @keyup.enter="signin"
            />
          </article>
        </transition>
        <transition name="slide-fade">
          <article v-if="isLdap" class="ldap-signin">
            <font-awesome-icon icon="fa-regular fa-user"></font-awesome-icon>
            <input
              ref="ldapEmail"
              type="email"
              placeholder="그룹웨어 계정"
              v-model="form.ldap.email"
            />
            <font-awesome-icon
              icon="fa-regular fa-keyboard"
            ></font-awesome-icon>
            <input
              ref="ldapPassword"
              type="password"
              placeholder="비밀번호"
              v-model="form.ldap.password"
              @keyup.enter="signin"
            />
          </article>
        </transition>
        <button class="btn-signin" @click="signin">로그인</button>
        <a class="link-signup" href="/signup">계정이 없으신가요?</a>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  name: 'SigninView',
  data: () => {
    return {
      type: 'standard',
      form: {
        standard: {
          email: '',
          password: ''
        },
        ldap: {
          email: '',
          password: ''
        },
        selector: {
          style: {
            width: '200px',
            height: '50px',
            'background-color': 'var(--background-color)',
            transition: '0.5s',
            'margin-left': '0px',
            position: 'absolute',
            'z-index': 0
          }
        }
      }
    }
  },
  computed: {
    isStandard: function () {
      return this.type === 'standard'
    },
    isLdap: function () {
      return this.type === 'ldap'
    }
  },
  methods: {
    resetForm: function () {
      this.form.standard.email = ''
      this.form.standard.password = ''
      this.form.ldap.email = ''
      this.form.ldap.password = ''
    },
    changeToStandard: function (e) {
      this.resetForm()
      this.form.selector.style['margin-left'] = '0px'
      this.type = 'standard'
    },
    changeToLdap: function (e) {
      this.resetForm()
      this.form.selector.style['margin-left'] = '200px'
      this.type = 'ldap'
    },
    focusStandardEmail: function (e) {
      this.$refs.standardEmail.focus()
    },
    validate: function () {
      if (this.type === 'standard') {
        return this.validateStandard()
      } else if (this.type === 'ldap') {
        return this.validateLdap()
      } else {
        return false
      }
    },
    validateStandard: function () {
      const view = this
      if (this.form.standard.email.length < 1) {
        this.$alert({
          contents: '이메일 주소를 입력해주세요.',
          callback: () => {
            view.$refs.standardEmail.focus()
          }
        })
        return false
      }
      if (this.form.standard.password.length < 1) {
        this.$alert({
          contents: '비밀번호를 입력해주세요.',
          callback: () => {
            view.$refs.standardPassword.focus()
          }
        })
        return false
      }
      return true
    },
    validateLdap: function () {
      const view = this
      if (this.form.ldap.email.length < 1) {
        this.$alert({
          contents: '이메일 주소를 입력해주세요.',
          callback: () => {
            view.$refs.ldapEmail.focus()
          }
        })
        return false
      }
      if (this.form.ldap.password.length < 1) {
        this.$alert({
          contents: '비밀번호를 입력해주세요.',
          callback: () => {
            view.$refs.ldapPassword.focus()
          }
        })
        return false
      }
      return true
    },
    signin: function (e) {
      if (this.validate() === false) return false
      const signinInfo =
        this.type === 'standard' ? this.form.standard : this.form.ldap
      this.$api
        .post('/api/signin', JSON.stringify(signinInfo))
        .then((response) => {
          sessionStorage.setItem('user', JSON.stringify(response))
          this.$router.replace('/explore')
        })
        .catch((err) => {
          this.$alert({
            title: '로그인 실패 (' + err.code + ')',
            contents: err.message
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
section.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;

  header {
    text-align: center;
    user-select: none;
    h1 {
      color: var(--primary-color);
      font-family: 'Yeongdo-Rg';
      font-size: 52px;
      margin: 0;
    }
  }

  main {
    height: 330px;
    align-self: center;
    border: 1px solid #cdcdcd;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
    -webkit-box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
    -moz-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
    -o-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
    -ms-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);

    section.signin-form {
      width: 400px;
      div.slide-wrap {
        width: 400px;
        height: 50px;
        background-color: var(--primary-color);
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: row;
          position: absolute;
          z-index: 1;
          user-select: none;
          background-color: transparent;
          li {
            width: 200px;
            height: 50px;
            text-align: center;
            background-color: transparent;
            &.activate-form {
              button {
                color: var(--primary-color);
              }
            }
            button {
              border: 0;
              width: 200px;
              height: 50px;
              background-color: transparent;
              color: white;
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
      button.btn-signin {
        position: absolute;
        margin: 170px 30px 0 30px;
        height: 50px;
        width: 340px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        background-color: var(--primary-color);
        color: white;
        user-select: none;

        &:hover {
          cursor: pointer;
        }
        &:active {
          background-color: var(--secondary-color);
        }
      }
      a.link-signup {
        position: absolute;
        margin: 230px 0 0 35px;
        font-size: 14px;
      }
    }

    article.standard-signin,
    article.ldap-signin {
      position: absolute;
      width: 340px;
      padding: 20px 30px 10px 30px;

      svg {
        position: absolute;
        margin: 30px 0 0 5px;
        color: #6b6b6b;
      }

      input {
        border: 0;
        width: 270px;
        background-color: transparent;
        display: block;
        font-size: 16px;
        border-bottom: 1px solid #6b6b6b;
        padding: 10px 35px;
        margin-top: 20px;
        outline: 0;
        user-select: none;
      }
    }
  }

  .slide-fade-enter,
  .slide-fade-leave {
    transition: all 0.1s ease;
  }
  .slide-fade-leave-active,
  .slide-fade-enter-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
  }
  .slide-fade-leave,
  .slide-fade-enter-to {
    opacity: 1;
  }
}
</style>
