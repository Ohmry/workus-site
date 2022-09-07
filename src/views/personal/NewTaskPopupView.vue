<template>
  <transition name="fade" appear>
    <div class="popup-container" v-if="visible">
      <div class="dim"></div>
      <div class="task-create-container">
        <h3>새로운 업무 생성</h3>
        <section>
          <label>구분</label>
          <select>
            <option>개발과제</option>
            <option>개발요청</option>
            <option>자료요청</option>
            <option>전산요청</option>
          </select>
        </section>
        <section>
          <label>팀</label>
          <select>
            <option>스크린개발팀</option>
            <option>그룹웨어개발팀</option>
          </select>
        </section>
        <section>
          <label>프로젝트</label>
          <select>
            <option>모바일오더 기능 개선</option>
            <option>모바일 TMS 고도화</option>
          </select>
        </section>
        <section>
          <label>작업</label>
          <input type="text" />
        </section>
        <section class="flex-row">
          <label>요청부서</label>
          <input style="width: 141px;" type="text" />
          <label style="width: 60px; padding: 0 0 0 30px">요청자</label>
          <input style="width: 141px;" type="text" />
        </section>
        <section>
          <label>기간</label>
          <input type="date" />
          <span style="padding: 0 5px">~</span>
          <input type="date" />
        </section>
        <section>
          <label>상태</label>
          <select>
            <option>작업 예정</option>
            <option>작업 중</option>
            <option>테스트 중</option>
            <option>배포 예정</option>
            <option>작업 완료</option>
            <option>보류 또는 중단</option>
          </select>
        </section>
        <section>
          <label>담당자</label>
        </section>
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
div.popup-container {
  z-index: 100;
  transition: opacity 0.5s ease;
}

div.dim {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
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
  z-index: 101;

  h3 {
    color: var(--primary-color);
    font-size: 20px;
    padding: 5px 0 10px 0;
    border-bottom: 1px solid var(--secondary-color);
  }

  section {
    &.flex-row {
      display: flex;
      flex-direction: row;
      align-items: baseline;
    }
    label {
      font-weight: bold;
      color: var(--primary-color);
      width: 90px;
      margin: 0 0 20px 0;
      display: inline-block;
    }
    select {
      width: 400px;
      padding: 5px;
    }
    input[type=text] {
      width: 386px;
      padding: 5px;
    }
    input[type=date] {
      padding: 5px;
    }
  }
}

div.button-container {
  text-align: center;
  button {
    height: 32px;
    padding: 1px 15px;
    margin-left: 5px;
    align-self: center;
    background-color: var(--primary-color);
    color: white;
    border: 0;
    outline: 0;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
    }
    &:active {
      background-color: var(--secondary-color);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
