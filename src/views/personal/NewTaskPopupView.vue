<template>
  <transition>
  <div class="popup-container" v-if="visible">
    <div class="dim"></div>
    <div class="task-create-container">
      <h3>새로운 업무 생성</h3>
      <div class="button-container">
        <button>생성</button>
        <button @click="onClose">닫기</button>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'NewTaskPopupView',
  props: ['visible'],
  methods: {
    onClose: function (e) {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
div.task-create-container {
  background-color: white;
  position: absolute;
  width: 540px;
  height: 780px;
  left: calc(50% - 300px);
  top: calc(50% - 400px);
  border-radius: 10px;
  border: 1px solid var(--primary-color);
  padding: 10px 30px;

  h3 {
    color: var(--primary-color);
    font-size: 20px;
  }
}
</style>
