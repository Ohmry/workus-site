<template>
  <div class="container">
    <main>
      <header>
        <h2>업무목록</h2>
        <div class="search-box-container">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" data-type="alarm"></font-awesome-icon>
          <input class="search-box" type="text" />
        </div>
        <button @click="openNewTaskPopup">새로운 업무</button>
      </header>
      <table>
        <colgroup>
          <col style="width: 40px;" />
          <col style="width: 70px;" />
          <col style="width: 90px;" />
          <col style="width: 180px;" />
          <col style="min-width: 300px" />
          <col style="width: 90px;" />
          <col style="width: 150px;" />
          <col style="width: 110px;" />
          <col style="width: 110px;" />
          <col style="width: 90px;" />
          <col style="width: 70px;" />
          <col style="width: 100px" />
        </colgroup>
        <thead>
          <th>순번</th>
          <th>중요도</th>
          <th>구분</th>
          <th>팀/프로젝트</th>
          <th>작업</th>
          <th>요청자</th>
          <th>요청부서</th>
          <th>시작일자</th>
          <th>종료일자</th>
          <th>상태</th>
          <th>진행률</th>
          <th>담당자</th>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="task.id + '_' + index" @contextmenu.prevent="openContextMenu(task)">
            <td>{{ index + 1 }}</td>
            <td></td>
            <td>{{ task.category }}</td>
            <td>{{ task.team.name || task.project.name }}</td>
            <td style="text-align: left">{{ task.title }}</td>
            <td>{{ task.requester }}</td>
            <td>{{ task.requestDepartment }}</td>
            <td>{{ toDateFormatter(task.startDate) }}</td>
            <td>{{ toDateFormatter(task.endDate) }}</td>
            <td>{{ getProgressName(task.progress) }}</td>
            <td>{{ task.percentage + '%'}}</td>
            <td class="avatar-cell">
              <div class="avatar" v-for="(label, index) in getManagerLabels(task)" :key="'manager-' + index">{{ label }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  data: () => {
    return {
      tasks: [
        { id: 1, category: '개발과제', team: { name: '' }, project: { name: '프로젝트1' }, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: '이병훈' }, { name: '김준철' }] }
      ]
    }
  },
  methods: {
    toDateFormatter: function (date) {
      return date.substring(0, 4) + '-' + date.substring(4, 6) + '-' + date.substring(6)
    },
    getProgressName: function (progress) {
      let name = ''
      switch (progress) {
        case 'READY':
          name = '작업 예정'
          break
        case 'PROCEED':
          name = '진행 중'
          break
        case 'TESTING':
          name = '테스트 중'
          break
        case 'BEFORE_DEPLOY':
          name = '배포예정'
          break
        case 'COMPLETED':
          name = '작업 완료'
          break
        case 'ABORTED':
          name = '보류/중단'
          break
        default:
          break
      }
      return name
    },
    getManagerLabels: function (task) {
      let count = 2
      if (!Array.isArray(task.managers)) return ''
      if (task.managers.length < 1) return ''
      if (task.managers.length < count) {
        count = task.managers.length
      }

      const managers = []
      for (let index = 0; index < count; index++) {
        managers.push(task.managers[index].name.substring(0, 1).toUpperCase())
      }
      if (task.managers.length > count) {
        managers.push('+' + (task.managers.length - count))
      }
      return managers
    },
    openContextMenu: function (row) {
      console.log(row)
    },
    openNewTaskPopup: function (e) {
      this.$emit('openNewTaskPopup')
    }
  },
  mounted: function () {
    this.tasks = this.$store.state.tasks
  }
}
</script>

<style lang="scss" scoped>
div.container {
  // padding: 10px 30px 10px 30px;
  background-color: #FFFFFF;
  height: calc(100vh - 50px);
  overflow: auto;

  header {
    padding: 10px 30px 0 30px;
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
    height: 60px;
    line-height: 60px;
    background-color: #FFFFFF;
    h2 {
      color: var(--primary-color);
      margin: 0;
      flex-grow: 1;
    }
    div.search-box-container {
      display: flex;
      flex-direction: row;
      align-self: center;
      border: 1px solid var(--foreground-color);
      height: 24px;
      padding: 3px;
      border-radius: 5px;

      svg {
        padding: 0 8px;
        align-self: center;
        color: var(--foreground-color);
      }

      input {
        outline: 0;
        border: 0;
        font-size: 14px;
      }
    }

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
  main {
    width: fit-content;
    table {
      border-spacing: 0px;
      min-width: 800px;
      table-layout: fixed;
      width: 100%;
      user-select: none;
      padding: 0 30px 10px 30px;

      thead {
        th {
          position: sticky;
          top: 70px;
          padding: 5px;
          font-size: 14px;
          background-color: #FFFFFF;
          border-top: 2px solid var(--primary-color);
          border-bottom: 2px solid var(--primary-color);
          &:first-child {
            border-left: 0;
          }
          &:last-child {
            border-right: 0;
          }
        }
      }

      tbody {
        tr {
          &:hover {
            background-color: #FFE7EB;
            cursor: pointer;
          }
          &:active {
            background-color: #FFA2B0;
          }
        }

        td {
          border-bottom: 1px solid var(--primary-color);
          border-left: 1px dashed #777777;
          padding: 5px 10px;
          text-align: center;
          font-size: 14px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          &:first-child {
            border-left: 0;
          }
          &:last-child {
            border-right: 0;
          }

          &.avatar-cell {
            display: flex;
            flex-direction: row;

            div.avatar {
              width: 25px;
              height: 25px;
              margin-right: 3px;
              background-color: #C7C7C7;
              border-radius: 50%;
              text-align: center;
              line-height: 25px;
            }
          }
        }
      }
    }
  }
}
</style>
