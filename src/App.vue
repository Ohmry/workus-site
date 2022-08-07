<template>
  <div id="app">
    <router-view></router-view>
    <AppAlert />
    <AppConfirm />
    <AppContextMenu />
  </div>
</template>

<script>
import AppContextMenu from './components/installer/AppContextMenu/AppContextMenu.vue'
export default {
  data: () => {
    return {}
  },
  methods: {
    buttonClick: function (target) {
      target.srcElement.classList.add('clicked')
      setTimeout(() => {
        target.srcElement.classList.remove('clicked')
      }, 200)
    }
  },
  components: { AppContextMenu }
}
</script>

<style lang="scss">
:root {
  --background-color: #f7f7f7;
  --background-secondary-color: #e7e7e7;
  --foreground-color: #adadad;
  --foreground-secondary-color: #E7E7E7;
  --primary-color: #d7102d;
  --secondary-color: #f25a71;
  --font-link-color: #0427d4;
  --third-color: #6e2933;
  --button-active-color: white;
  --button-not-active-color: #ff9eac;
}
#app {
  height: 100vh;
  background-color: var(--background-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}
a {
  color: var(--font-link-color);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
