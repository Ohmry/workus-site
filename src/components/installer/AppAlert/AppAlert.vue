<template>
  <main v-if="visible">
    <section>
      <h3>{{ title }}</h3>
      <article>
        {{ contents }}
      </article>
      <button @click="onClose">닫기</button>
    </section>
  </main>
</template>

<script>
import { AppAlertEvents } from '../events'

export default {
  data: () => {
    return {
      title: '확인',
      contents: '이곳에 알림 메세지를 입력하세요.',
      visible: false,
      callback: undefined
    }
  },
  methods: {
    onOpen: function (params) {
      this.visible = true
      this.title = params.title
      this.contents = params.contents
      this.callback = params.callback
    },
    onClose: function () {
      this.visible = false
      if (this.callback) {
        this.callback()
      }
    }
  },
  mounted: function () {
    AppAlertEvents.$on('open', this.onOpen)
    AppAlertEvents.$on('close', () => this.onClose())
  }
}
</script>

<style lang="scss" scoped>
main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;

  section {
    width: 300px;
    height: fit-content;
    background-color: var(--background-color);
    align-self: center;
    padding: 20px 25px;
    border: 1px solid #e9e9e9;
    border-radius: 5px;
    box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
    -webkit-box-shadow: 10px 10px 20px rgb(0 0 0 / 20%);
    -moz-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
    -o-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
    -ms-box-shadow: 10px 10px 20px rgba(000, 000, 000, 0.2);
    user-select: none;

    h3 {
      font-weight: normal;
      margin: 10px 0 0 0;
    }
    article {
      padding: 25px 0;
    }
    button {
      display: block;
      margin: 0 auto;
      width: 100px;
      height: 40px;
      border: 0;
      border-radius: 5px;
      background-color: var(--primary-color);
      color: white;
      cursor: pointer;
      &:active {
        background-color: var(--secondary-color);
      }
    }
  }
}
</style>
