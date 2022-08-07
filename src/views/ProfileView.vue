<template>
  <main>
    <AppNavigator />
    <section class="explore-view-container">
      <section class="user-info-container">
        <QrcodeVue class="user-qrcode" :value="user.email" size="150" level="H" />
        <article class="user-info">
          <h2>{{ user.name }}</h2>
          <h4>{{ user.email }}</h4>
        </article>
        <ul class="user-detail">
          <li>
            <font-awesome-icon icon="fa-solid fa-building" />
            <span>콘텐트리중앙</span>
          </li>
        </ul>
      </section>
      <section class="explore-info-container">
      </section>
    </section>
  </main>
</template>

<script>
import AppNavigator from '@/components/AppNavigator.vue'
import QrcodeVue from 'qrcode.vue'

export default {
  components: {
    AppNavigator,
    QrcodeVue
  },
  data: () => {
    return {
      user: {
        id: undefined,
        email: undefined,
        name: undefined
      }
    }
  },
  methods: {
  },
  mounted: function () {
    this.user = JSON.parse(sessionStorage.getItem('user'))
  }
}
</script>

<style lang="scss">
section.explore-view-container {
  display: flex;
  flex-direction: row;
  section.user-info-container {
    width: 250px;
    height: calc(100vh - 50px);
    padding: 50px 10px;
    display: flex;
    flex-direction: column;
    div.user-qrcode {
      display: inline-block;
      align-self: center;
      canvas {
        border: 2px solid var(--foreground-color);
        border-radius: 50%;
      }
    }
    article.user-info {
      text-align: center;
      h2 {
        margin: 20px 0 0 0;
      }
      h4 {
        margin: 5px 0 0 0;
        color: var(--foreground-color);
        font-weight: normal;
      }
    }
    ul.user-detail {
      list-style-type: none;
      padding: 0 50px;
      li {
        font-size: 16px;
        height: 25px;
        line-height: 25px;
        vertical-align: middle;
        padding: 0 0 0 35px;
        margin: 10px 0 0 0;
        svg {
          float: left;
          color: var(--foreground-color);
          font-size: 24px;
          margin: 0 0 0 -35px;
        }
      }
    }
  }
  section.explore-info-container {
    flex-grow: 1;
    height: calc(100vh - 50px);
    background-color: blue;
  }
}
</style>
