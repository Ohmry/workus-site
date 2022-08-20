<template>
  <div class="container">
    <header>
      <h2>업무목록</h2>
    </header>
    <section>
      Search Section
    </section>
    <main>
      <table>
        <colgroup>
          <col style="width: 40px;" />
          <col/>
          <col style="width: 90px;" />
          <col style="width: 150px;" />
          <col style="width: 110px;" />
          <col style="width: 110px;" />
          <col style="width: 70px;" />
          <col/>
        </colgroup>
        <thead>
          <th>순번</th>
          <th>작업</th>
          <th>요청자</th>
          <th>요청부서</th>
          <th>시작일자</th>
          <th>만기일자</th>
          <th>진행률</th>
          <th>비고</th>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="task.id">
            <td>{{ index + 1 }}</td>
            <td>{{ task.title }}</td>
            <td>{{ task.requester }}</td>
            <td>{{ task.requestDepartment }}</td>
            <td>{{ toDateFormatter(task.startDate) }}</td>
            <td>{{ toDateFormatter(task.endDate) }}</td>
            <td>{{ task.progress + '%'}}</td>
            <td>{{ task.brief }}</td>
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
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' },
        { id: 1, title: '쿠폰정책관리 기능 개선', requester: '이은지K', requestDepartment: '메가박스 마케팅팀', startDate: '20220101', endDate: '20221231', progress: 80, brief: '비고란' }
      ]
    }
  },
  methods: {
    toDateFormatter: function (date) {
      return date.substring(0, 4) + '-' + date.substring(4, 6) + '-' + date.substring(6)
    }
  }
}
</script>

<style lang="scss" scoped>
div.container {
  padding: 0 10px;
  main {
    table {
      border-collapse: collapse;
      table-layout: fixed;
      min-width: 800px;
      width: 100%;

      thead {
        th {
          padding: 5px;
          font-size: 16px;
          border: 1px solid black;
          background-color: lightgray;
        }
      }

      tbody {
        td {
          border: 1px solid black;
          padding: 5px 0;
          text-align: center;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
