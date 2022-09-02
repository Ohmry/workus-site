<template>
  <table>
    <colgroup>
      <col style="min-width: 40px" />
      <col style="min-width: 110px;" />
      <col style="min-width: 300px" />
      <col style="min-width: 110px;" />
      <col style="min-width: 110px;" />
      <col style="min-width: 110px;" />
      <col v-for="(day, index) in this.calendar.days" :key="'col-' + index" :style="{ 'min-width': calendar.cellWidth + 'px' }" />
    </colgroup>
    <thead>
      <tr>
        <td rowspan="2">순번</td>
        <td rowspan="2">구분</td>
        <td rowspan="2">작업</td>
        <td rowspan="2">시작일자</td>
        <td rowspan="2">종료일자</td>
        <td rowspan="2">담당자</td>
        <td v-for="(month, index) in this.calendar.months" :key="'month-cell-' + index" :colspan="month.days" class="month-cell">{{ month.label }}</td>
      </tr>
      <tr>
        <td v-for="(day, index) in this.calendar.days" :key="'day-cell-' + index" :style="{ color: day.color, 'background-color': day.bgColor }" class="day-cell">{{ day.label }}</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(task, index) in items" :key="'task-' + index">
        <td>{{ index + 1 }}</td>
        <td>{{ task.category }}</td>
        <td :class="{ 'cell-subTask': task.isSubTask }">
          <font-awesome-icon icon="fa-regular fa-folder" v-if="task.hasSubTask"></font-awesome-icon>
          <span v-if="!task.hasSubTask">- </span>
          {{ task.title }}
        </td>
        <td>{{ parseDateFormatter(task.startDate, 'yyyy-MM-dd') }}</td>
        <td>{{ parseDateFormatter(task.endDate, 'yyyy-MM-dd') }}</td>
        <td></td>
        <td v-for="(day, index) in calendar.days" :key="'day-cell-' + index">
          <div :class="getCellClassName(day, task)"></div>
        </td>
        <!-- <td v-for="(day, index) in calendar.days" :key="'day-cell-' + index" :class="getCellClassName(day, task)"></td> -->
      </tr>
    </tbody>
  </table>
</template>

<script>
import DateUtils from '@/modules/DateUtils'
import DateFormatter from '@/modules/DateFormatter'
export default {
  name: 'TimelineFragment',
  props: ['fromMonth', 'toMonth', 'items'],
  data: () => {
    return {
      calendar: {
        months: [],
        days: [],
        cellWidth: 25
      }
    }
  },
  methods: {
    parseMonthFormatter: function (month) {
      return month < 10 ? '0' + month : month
    },
    parseDayFormatter: function (day) {
      return day < 10 ? '0' + day : day
    },
    parseDateFormatter: function (date, format) {
      return DateFormatter.parseFromString(date, 'yyyy-MM-dd')
    },
    getCellClassName: function (day, task) {
      const today = DateUtils.getTodayValue()
      if (day.value === today) {
        return 'task-cell-today'
      } else if (task.startDate <= day.value && day.value <= task.endDate && task.isSubTask) {
        return 'task-cell-active-sub'
      } else if (task.startDate <= day.value && day.value <= task.endDate) {
        return 'task-cell-active'
      } else if (day.dayOfMonth === 0 || day.dayOfMonth === 6) {
        return 'task-cell-holiday'
      } else {
        return 'task-cell-blank'
      }
    },
    getTaskIcon: function (task) {
      if (task.hasSubTask) {
        return 'fa-regular fa-folder'
      } else {
        return 'fa-regular fa-file'
      }
    }
  },
  beforeMount: function () {
    this.calendar.startDate = new Date(this.fromMonth.substring(0, 4), this.fromMonth.substring(4), 0)
    this.calendar.endDate = new Date(this.toMonth.substring(0, 4), this.toMonth.substring(4), 0)

    for (let cursor = this.calendar.startDate; cursor <= this.calendar.endDate;) {
      this.calendar.months.push({
        year: cursor.getFullYear(),
        month: cursor.getMonth() + 1,
        days: cursor.getDate() + 1,
        label: cursor.getFullYear() + '-' + DateUtils.getMonthWithPad(cursor)
      })
      this.calendar.days.push(...Array.from({ length: cursor.getDate() + 1 }, (v, k) => {
        const day = new Date(cursor.getFullYear(), cursor.getMonth(), k + 1)
        const dayOfMonth = day.getDay()
        return {
          label: k + 1,
          value: cursor.getFullYear() + '' + this.parseMonthFormatter(cursor.getMonth() + 1) + '' + this.parseDayFormatter(k + 1),
          dayOfMonth: dayOfMonth,
          color: dayOfMonth === 0 ? 'red' : dayOfMonth === 6 ? 'blue' : 'black',
          bgColor: dayOfMonth === 0 || dayOfMonth === 6 ? '#E7E7E7' : '#FFFFFF'
        }
      }))
      cursor.setDate(1)
      cursor.setMonth(cursor.getMonth() + 2)
      cursor.setDate(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  border: 0;
  thead {
    position: sticky;
    top: 70px;
    z-index: 3;
    tr {
      td {
        border-bottom: 2px solid var(--primary-color);
        text-align: center;
        font-size: 14px;
        // font-weight: bold;
        background-color: #FFFFFF;

        &:first-child {
          font-weight: bold;
        }

        &:last-child {
          border-right: 0;
        }
      }
      &:first-child {
        td {
          border-top: 2px solid var(--primary-color);

          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4),
          &:nth-child(5),
          &:nth-child(6) {
            font-weight: bold;
          }

          &:nth-child(3) {
            position: sticky;
            left: 0px;
            z-index: 2;
          }

          &:nth-child(4) {
            position: sticky;
            left: 300px;
            z-index: 2;
          }

          &:nth-child(5) {
            position: sticky;
            left: 410px;
            z-index: 2;
          }

          &:nth-child(6) {
            border-right: 2px solid var(--primary-color);
            position: sticky;
            left: 520px;
            z-index: 2;
          }

          &.month-cell {
            border-right: 1px solid var(--primary-color);
          }
        }
      }
      &:not(:first-child) {
        td {
          border-right: 1px solid var(--primary-color);
        }
      }
    }
  }
  tbody {
    z-index: 1;
    tr {
      td {
        border-bottom: 1px solid var(--primary-color);
        border-right: 1px dashed var(--primary-color);
        text-align: center;
        font-size: 14px;
        background-color: #FFFFFF;
        padding: 0;
        height: 20px;

        &:last-child {
          border-right: 0;
        }

        &:nth-child(3) {
          position: sticky;
          left: 0px;
          z-index: 2;
          text-align: left;
          padding: 5px 10px;

          svg {
            padding: 0 3px 0 0;
          }

          &.cell-subTask {
            padding: 5px 20px;
          }
        }

        &:nth-child(4) {
          position: sticky;
          left: 300px;
          z-index: 2;
        }

        &:nth-child(5) {
          position: sticky;
          left: 410px;
          z-index: 2;
        }

        &:nth-child(6) {
          position: sticky;
          left: 520px;
          z-index: 2;
          border-right: 2px solid var(--primary-color);
        }

        div {
          height: 100%;
          &.task-cell-today {
            background-color: #FFE894;
          }
          &.task-cell-active {
            background-color: var(--secondary-color);
          }
          &.task-cell-active-sub {
            background-color: #FFC0CA;
          }
          &.task-cell-holiday {
            background-color: #E7E7E7;
          }
          &.task-cell-blank {
            background-color: transparent;
          }
        }
      }
    }
  }
}
</style>
