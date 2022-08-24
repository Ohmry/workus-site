<template>
  <div class="container">
    <header>
      <h2>업무목록</h2>
      <div class="search-box-container">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" data-type="alarm"></font-awesome-icon>
        <input class="search-box" type="text" />
      </div>
      <button>새로운 업무</button>
    </header>
    <main>
      <table>
        <colgroup>
          <col style="width: 40px;" />
          <col style="width: 90px;" />
          <col/>
          <col style="width: 90px;" />
          <col style="width: 150px;" />
          <col style="width: 110px;" />
          <col style="width: 110px;" />
          <col style="width: 70px;" />
          <col style="width: 70px;" />
          <col style="width: 160px" />
        </colgroup>
        <thead>
          <th>순번</th>
          <th>구분</th>
          <th>작업</th>
          <th>요청자</th>
          <th>요청부서</th>
          <th>시작일자</th>
          <th>만기일자</th>
          <th>상태</th>
          <th>진행률</th>
          <th>담당자</th>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="task.id">
            <td>{{ index + 1 }}</td>
            <td>개발과제</td>
            <td style="text-align: left">{{ task.title }}</td>
            <td>{{ task.requester }}</td>
            <td>{{ task.requestDepartment }}</td>
            <td>{{ toDateFormatter(task.startDate) }}</td>
            <td>{{ toDateFormatter(task.endDate) }}</td>
            <td>{{ task.progress }}</td>
            <td>{{ task.percentage + '%'}}</td>
            <td>
              <span class="tag" v-for="(manager, index) in task.managers" :key="index">{{ manager.name.substring(0, 1).toUpperCase() }}</span>
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
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        // { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: '진행 중', percentage: 80, managers: [{ name: 'lee.byunghoon' }, { name: 'kim.joonchul' }] }
      ]
    }
  },
  methods: {
    toDateFormatter: function (date) {
      return date.substring(0, 4) + '-' + date.substring(4, 6) + '-' + date.substring(6)
    },
    parseTagToHtml: function (tags) {
      let html = ''
      tags.forEach(tag => {
        html += '<span class="tag">' + tag + '</span>'
      })
      return html
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
    table {
      // border-collapse: collapse;
      border-spacing: 0px;
      table-layout: fixed;
      min-width: 800px;
      width: 100%;

      thead {
        th {
          position: sticky;
          top: 110px;
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
            background-color: #FFB8C3;
          }
        }

        td {
          border-bottom: 1px solid var(--primary-color);
          border-left: 1px dashed #777777;
          padding: 5px 10px;
          text-align: center;
          font-size: 14px;
          &:first-child {
            border-left: 0;
          }
          &:last-child {
            border-right: 0;
          }

          span.tag {
            font-size: 12px;
            padding: 2px 5px;
            margin: 0 2px;
            border: 1px solid var(--secondary-color);
            border-radius: 50%;
            background-color: var(--secondary-color);
            color: white;
          }
        }
      }
    }
  }
}
</style>
