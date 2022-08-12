export default {
  mounted: function () {
    console.log('view mounted')
    this.$eventBus.$emit('router_onchange', this.$router.currentRoute.path)
  },
  updated: function () {
    console.log('view updated')
    this.$eventBus.$emit('router_onchange', this.$router.currentRoute.path)
  }
}
