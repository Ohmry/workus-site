<template>
  <div id="app">
    <AppNavigator />
    <router-view></router-view>
    <AppAlert />
    <AppConfirm />
    <AppContextMenu />
  </div>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue'
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
  components: {
    AppContextMenu,
    AppNavigator
  }
}
</script>

<style lang="scss">
:root {
  --background-color: #f7f7f7;
  --background-secondary-color: #E7E7E7;
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
  min-width: 800px;
  background-color: var(--background-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
  overflow: hidden;
}
a {
  color: var(--font-link-color);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

span[data-type=caption] {
  font-size: 14px;
  color: #6B6B6B;
}

nav.app-navigator {
  position: sticky;
  top: 0;
}

div.layout-container {
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 50px);
  background-color: var(--background-color);

  div.container {
    flex: 1;
  }
}
</style>
