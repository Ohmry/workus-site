<template>
  <section class="view-container">
    <AppNavigator />
    <nav></nav>
    <main></main>
  </section>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue'
export default {
  name: 'GroupView',
  components: {
    AppNavigator
  }
}
</script>
