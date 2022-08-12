<template>
  <nav class="app-navigator">
      <a href="/" data-type="logo">WORKUS</a>
      <span class="divider"></span>
      <router-link v-for="(menu, index) in application.menus" :key="index" :to="menu.uri">
        <button>
          {{ menu.label }}
        </button>
      </router-link>
      <section class="user-menu-container">
        <font-awesome-icon icon="fa-solid fa-bell" data-type="alarm"></font-awesome-icon>
        <span v-if="application.alarm.visible" data-type="badge"></span>
        <img src="@/assets/profile.jpeg" @click="openMyMenu"/>
        <UserContextMenu :visible="application.myMenu.visible" :user="user" @close="closeMyMenu"/>
      </section>
    </nav>
</template>

<script>
import UserContextMenu from '@/components/UserContextMenu.vue'
export default {
  components: {
    UserContextMenu
  },
  data: () => {
    return {
      user: {
        id: undefined,
        email: undefined,
        name: undefined,
        accessToken: undefined,
        refreshToken: undefined
      },
      application: {
        menus: [
          { label: '내 업무', uri: '/' },
          { label: '작업공간', uri: '/workspace' },
          { label: '프로젝트', uri: '/project' },
          { label: '이슈', uri: '/issue' }
        ],
        myMenu: {
          visible: false
        },
        alarm: {
          visible: false
        }
      }
    }
  },
  methods: {
    openMyMenu: function (e) {
      this.application.myMenu.visible = !this.application.myMenu.visible
    },
    closeMyMenu: function (e) {
      this.application.myMenu.visible = false
    },
    signup: function () {
      this.$router.replace('/signup')
    },
    signin: function () {
      this.$router.replace('/signin')
    }
  },
  beforeMount: function () {
    this.user = JSON.parse(sessionStorage.getItem('user'))
  },
  mounted: function () {
    this.$eventBus.$on('router_onchange', (path) => {
      console.log(path)
    })
  }
}
</script>

<style lang="scss" scoped>
nav {
  background-color: var(--primary-color);
  height: 50px;
  padding: 0px 10px;
  display: flex;
  user-select: none;

  span.divider {
    border-right: 1px solid #FF526B;
    padding: 8px 5px;
    margin: 8px 10px 8px 0px;
  }

  a[data-type=logo] {
    color: var(--foreground-secondary-color);
    font-family: 'Yeongdo-Rg';
    font-size: 30px;
    align-self: self-end;
    user-select: none;
    margin: 0 10px 0 0;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
    &:active {
      color: var(--secondary-color);
    }
  }

  a {
    &.router-link-active {
      button {
        color: var(--button-active-color);
      }
    }

    button {
      height: 100%;
      border: 0px;
      background-color: transparent;
      font-size: 16px;
      outline: none;
      color: var(--button-not-active-color);
      cursor: pointer;
      padding: 0 15px;
      &:active {
        color: var(--button-active-color);
      }
    }
  }

  section.user-menu-container {
    margin: 0 10px 0 auto;
    display: flex;
    flex-direction: row;

    svg[data-type=alarm] {
      font-size: 20px;
      align-self: center;
      margin: 0 20px 0 0;
      color: var(--background-color);

      &:hover {
        cursor: pointer;
        color: var(--background-secondary-color);
      }
    }

    span[data-type=badge] {
      position: absolute;
      top: 15px;
      right: 70px;
      border: 1px solid var(--primary-color);
      background-color: #CFEF4D;
      border-radius: 50%;
      width: 8px;
      height: 8px;
    }

    img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      border: 1px solid var(--background-color);
      margin: 9px 0 9px auto;
      cursor: pointer;
    }
  }
}

</style>
