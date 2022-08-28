<template>
  <div
    class="card"
    @mousedown="startCardDrag"
    @touchstart="startCardDrag"
  >
    <div :class="{ 'card-importance': true, 'importance-high': item.importance === 'HIGH', 'importance-mid': item.importance === 'MID' }"></div>
    <h4 class="card-title">{{ item.title }}</h4>
    <div class="card-duration">{{ this.dateFormatter(this.item.startDate) }} ~ {{ this.dateFormatter(this.item.endDate) }}</div>
    <div class="card-comment">
      <font-awesome-icon class="comment-icon" icon="fa-regular fa-comment" data-type="alarm"></font-awesome-icon>
      <span class="comment-count">{{ item.comment }}</span>
    </div>
    <div class="card-managers">
      <div class="avatar" v-for="(manager, index) in this.sliceManagers()" :key="'manager-' + index">{{ manager }}</div>
      <!-- <div class="avatar">+2</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardCard',
  props: ['item'],
  data: () => {
    return {
      container: undefined,
      layer: undefined,
      eventType: undefined,
      element: undefined,
      mouse: {
        shiftX: 0,
        shiftY: 0
      }
    }
  },
  methods: {
    dateFormatter: function (date) {
      return date.substring(0, 4) + '.' + date.substring(4, 6) + '.' + date.substring(6, 8)
    },
    sliceManagers: function () {
      let count = 2
      if (!Array.isArray(this.item.managers)) return ''
      if (this.item.managers.length < 1) return ''
      if (this.item.managers.length < count) {
        count = this.item.managers.length
      }

      const managers = []
      for (let index = 0; index < count; index++) {
        managers.push(this.item.managers[index].name.substring(0, 1).toUpperCase())
      }
      if (this.item.managers.length > count) {
        managers.push('+' + (this.item.managers.length - count))
      }
      return managers
    },
    startCardDrag: function (e) {
      if (e.button !== 0) return
      e.preventDefault()
      this.eventType = e.constructor
      this.element = e.toElement.className !== 'card' ? e.target.parentElement : e.target
      this.container = e.toElement.className !== 'card' ? e.target.parentElement.parentElement.parentElement.parentElement : e.target.parentElement.parentElement.parentElement
      this.mouse.shiftX = e.target.getBoundingClientRect().left
      this.mouse.shiftY = e.target.getBoundingClientRect().top
      if (this.eventType === TouchEvent) {
        e = e.touches[0]
      }

      this.element.style.width = this.element.clientWidth + 'px'
      this.element.style.position = 'absolute'
      this.element.style.zIndex = 99
      this.element.ondragstart = () => false

      this.moveCard(e.clientX, e.clientY)
      if (this.eventType === TouchEvent) {
        document.addEventListener('touchmove', this.dragCard)
        this.element.ontouchend = () => {
          this.resetCard()
          this.endCardDrag()
          this.element.ontouchend = null
        }
      } else {
        document.addEventListener('mousemove', this.dragCard)
        this.element.onmouseup = () => {
          this.resetCard()
          this.endCardDrag()
          this.element.onmouseup = null
        }
      }

      this.container.addEventListener('mouseleave', this.resetCard)
    },
    dragCard: function (e) {
      if (this.eventType === TouchEvent) {
        e = e.touches[0]
      }
      this.moveCard(e.clientX, e.clientY)
      this.element.hidden = true
      this.layer = document.elementFromPoint(e.clientX, e.clientY)
      this.element.hidden = false
    },
    moveCard: function (x, y) {
      this.element.style.left = x - (this.element.clientWidth / 2) + 'px'
      this.element.style.top = y - (this.element.clientHeight / 2) + 'px'
    },
    endCardDrag: function () {
      if (this.layer) {
        if (this.layer.className === 'progress-container') {
          const container = this.layer.getElementsByClassName('card-container')[0]
          if (container) {
            container.append(this.element)
          }

          const newProgress = container.getAttribute('data-progress-value')
          const task = this.$store.state.tasks.filter(task => task.id === this.item.id)
          console.log(task)
          if (task.length > 0) {
            task[0].progress = newProgress
          }
        } else {
          this.resetCard()
        }
      }
    },
    resetCard: function () {
      if (this.eventType === TouchEvent) {
        document.removeEventListener('touchmove', this.dragCard)
      } else {
        document.removeEventListener('mousemove', this.dragCard)
      }
      this.container.removeEventListener('mouseleave', this.resetCard)
      this.element.style = ''
    }
  }
}
</script>

<style lang="scss" scoped>
div.card {
  position: relative;
  padding: 0 0 10px 0;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 0 10px 0;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  border: 1px solid var(--foreground-color);
  background-color: #FFFFFF;

  div.card-importance {
    border-top: 10px solid transparent;
    padding: 5px 0 0 0;
    &.importance-high {
    border-top: 10px solid var(--primary-color);
    }

    &.importance-mid {
      border-top: 10px solid #ffc929;
    }
  }

  h4.card-title {
    margin: 0;
    padding: 3px 10px;
  }
  div.card-duration {
    font-size: 14px;
    padding: 0 10px 10px 10px;
  }
  div.card-comment {
    font-size: 14px;
    pointer-events: none;
    padding: 0 10px;
    svg {
      padding: 0 3px 0 0;
    }
  }
  div.card-managers {
    position: absolute;
    right: 5px;
    bottom: 5px;
    display: flex;
    flex-direction: row;

    div.avatar {
      pointer-events: none;
      background-color: #C7C7C7;
      width: 25px;
      height: 25px;
      font-size: 14px;
      margin-left: 3px;
      border-radius: 50%;
      text-align: center;
      line-height: 25px;
/*
      &:nth-child(1) {
        right: 62px;
        z-index: 3;
        background-color: #BAA8FF;
      }
      &:nth-child(2) {
        right: 35px;
        z-index: 2;
        background-color: #A2FFCB;
      }
      &:nth-child(3) {
        right: 8px;
        z-index: 1;
        background-color: #CFCFCF;
      }
*/
    }
  }
}
</style>
