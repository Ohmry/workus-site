<template>
  <div class="container">
    <header>
      <h2>진행상황별 보기</h2>
    </header>
    <main>
      <section class="progress-container">
        <h4>예정</h4>
        <div class="card-container">
          <article class="card" @mousedown="moveCard">모바일오더 개선</article>
        </div>
      </section>
      <section class="progress-container">
        <h4>진행중</h4>
        <div class="card-container">
          <article class="card">ISMS 취약점 개선 조치</article>
          <article class="card">쿠폰정책관리 기능 개선</article>
        </div>
      </section>
      <section class="progress-container">
        <h4>완료</h4>
        <div class="card-container">
          <article class="card">서버 TLS 버전 업데이트</article>
        </div>
      </section>
      <section class="progress-container">
        <h4>보류</h4>
        <div class="card-container">
          <article class="card">시스템 개선asdfasdfasdfasdfasdafdsf</article>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BoardView',
  methods: {
    moveCard: function (e) {
      const card = e.srcElement
      const shiftX = e.clientX - card.getBoundingClientRect().left
      const shiftY = e.clientY - card.getBoundingClientRect().top

      let targetElement

      console.log(e)
      console.log(card.offsetWidth)

      card.style.width = (card.clientWidth - 20) + 'px'
      card.style.position = 'absolute'
      card.style.zIndex = 99
      card.ondragstart = function () {
        return false
      }

      function moveAt (pageX, pageY) {
        card.style.left = pageX - shiftX + 'px'
        card.style.top = pageY - shiftY + 'px'
      }

      function onCardMove (e) {
        moveAt(e.pageX, e.pageY)
        card.hidden = true
        targetElement = document.elementFromPoint(e.clientX, e.clientY)
        card.hidden = false
      }

      moveAt(e.pageX, e.pageY)

      document.addEventListener('mousemove', onCardMove)

      card.onmouseup = function () {
        console.log('mouseup')
        document.removeEventListener('mousemove', onCardMove)
        card.onmouseup = null
        card.style.position = ''
        card.style.zIndex = ''
        card.style.width = ''

        if (targetElement) {
          const layer = targetElement.getElementsByTagName('div')[0]
          layer.append(card)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
div.container {
  padding: 10px 30px;
  background-color: #FFFFFF;
  header {
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 50px;
    height: 60px;
    line-height: 60px;
    background-color: #FFFFFF;
    h2 {
      color: var(--primary-color);
      margin: 0;
      flex-grow: 1;
    }
  }
  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    section.progress-container {
      flex: 1;
      margin: 10px;
      min-height: calc(100vh - 170px);
      background-color: #FFB5C0;
      border-radius: 10px;
      padding: 10px;

      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }

      h4 {
        margin: 0;
        font-size: 18px;
        padding: 10px;
      }

      div.card-container {
        article.card {
          background-color: var(--primary-color);
          color: white;
          padding: 10px;
          width: calc(100% - 20px);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin: 0 0 10px 0;
          border-radius: 5px;
          user-select: none;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
