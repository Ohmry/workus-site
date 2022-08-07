<template>
  <main id="app-context-menu" :style="this.layer">
    <ul>
      <li v-for="(menu, index) in contextMenu" :key="'context-' + index" @click="onClick(menu)">{{ menu.label }}</li>
    </ul>
  </main>
</template>

<script>
import { AppContextMenuEvents } from '../events'

export default {
  data: () => {
    return {
      context: undefined,
      layer: {
        display: 'none'
      },
      visible: false,
      contextMenu: []
    }
  },
  methods: {
    onOpen: function (e, params) {
      if (params === undefined) return
      if (this.layer.display === 'block') return
      this.contextMenu = params.contextMenu
      this.layer = {
        position: 'absolute',
        border: '1px solid #B0B0B0',
        display: 'block'
      }
      if (params.position) {
        if (params.position.left) this.layer.left = params.position.left + 'px'
        if (params.position.top) this.layer.top = params.position.top + 'px'
        if (params.position.right) this.layer.right = params.position.right + 'px'
        if (params.position.bottom) this.layer.bottom = params.position.bottom + 'px'
      } else {
        const left = e.srcElement.offsetLeft + (e.srcElement.clientWidth / 2)
        const top = e.srcElement.offsetTop + e.srcElement.clientHeight + 10
        this.layer.left = left + 'px'
        this.layer.top = top + 'px'
      }
      setTimeout(() => {
        document.addEventListener('click', this.context.clickOutside)
      }, 250)
    },
    onClick: function (menu) {
      this.layer.display = 'none'
      if (Object.prototype.hasOwnProperty.call(menu, 'click') && typeof menu.click === 'function') {
        menu.click()
      }
      document.removeEventListener('click', this.context.clickOutside)
    },
    onClose: function (e) {
      this.layer.display = 'none'
      document.removeEventListener('click', this.context.clickOutside)
    },
    clickOutside: function (e) {
      const element = this
      const mouseX = e.x
      const mouseY = e.y
      const insideClicked =
        mouseX >= element.$el.offsetLeft &&
        mouseX <= element.$el.offsetLeft + element.$el.offsetWidth &&
        mouseY >= element.$el.offsetTop &&
        mouseY <= element.$el.offsetTop + element.$el.offsetHeight
      if (!insideClicked) {
        this.onClose()
      }
    }
  },
  mounted: function () {
    AppContextMenuEvents.$on('open', this.onOpen)
    AppContextMenuEvents.$on('close', () => this.onClose())
    this.context = this
  }
}
</script>

<style lang="scss" scoped>
main {
  position: absolute;
  background-color: var(--background-secondary-color);
  border-radius: 5px;
  ul {
    padding: 10px 0 10px 0;
    margin: 0;
    list-style-type: none;
    li {
      min-width: 120px;
      &:hover {
        background-color: var(--primary-color);
        color: white;
        cursor: pointer;
      }
    }
    li:first-child {
      padding: 5px 10px;
    }
    li:not(:first-child) {
      margin: 5px 0 0 0;
      padding: 5px 10px 5px 10px;
    }
  }
}
</style>
