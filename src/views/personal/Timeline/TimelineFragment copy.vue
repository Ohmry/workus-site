<template>
  <svg :width="this.calendar.width" height="60">
    <line x1="0" :x2="this.calendar.width" y1="0.5" y2="0.5" stroke-width="1" stroke="#26B2A2" />
    <line x1="0" :x2="this.calendar.width" y1="29.5" y2="29.5" stroke-width="1" stroke="#26B2A2" />
    <line x1="0" :x2="this.calendar.width" y1="59.5" y2="59.5" stroke-width="1" stroke="#26B2A2" />
    <line :x1="this.calendar.width" :x2="this.calendar.width" y1="0" :y2="this.calendar.height" stroke-width="1" stroke="#26B2A2" />
    <line v-for="(month) in this.calendar.months" :key="month.value" :x1="month.left + month.width" :x2="month.left + month.width" y1="0.5" y2="29.5" stroke-width="1" stroke="#26B2A2" />
    <line v-for="(day, index) in this.calendar.days" :key="day.value" :x1="(index + 1) * day.width" :x2="(index + 1) * day.width" y1="29.5" y2="59.5" stroke-width="1" stroke="#26B2A2" />
    <text v-for="(month) in this.calendar.months" :key="month.value" :x="month.left + (month.width / 2)" :y="29.5/2" font-size="14">{{ month.label }}</text>
    <text v-for="(day, index) in this.calendar.days" :key="'day-text-' + index" :x="(index * day.width) + ((day.width - day.textWidth) / 2)" :y="(60.5 - 30.5) + 19" textLength="15px" font-size="14">{{ day.label }}</text>
  </svg>
</template>

<script>
export default {
  name: 'TimelineFragment',
  props: ['fromMonth', 'toMonth'],
  data: () => {
    return {
      calendar: {
        width: 0,
        height: 59.5,
        startDate: undefined,
        endDate: undefined,
        months: [],
        days: [],
        cellWidth: 30
      }
    }
  },
  methods: {
    initialize: function () {
      // let startDate = new Date(this.fromMonth.substring(0, 4), this.fromMonth.substring(4), 0)
      // let endDate = new Date(this.toMonth.substring(0, 4), this.toMonth.substring(4), 0)
    },
    parseMonthFormatter: function (month) {
      return month < 10 ? '0' + month : month
    },
    parseDayFormatter: function (day) {
      return day < 10 ? '0' + day : day
    },
    getTextWidth: function (text) {
      switch (text) {
        case 1:
          return 6.14
        case 2:
          return 8.22
        case 5:
          return 8.36
        case 7:
          return 8
        case 3:
        case 4:
        case 6:
        case 8:
        case 9:
          return 9
        case 13:
        case 23:
          return 15.36
        case 14:
        case 24:
          return 15.25
        case 16:
        case 19:
        case 26:
          return 15.41
        case 17:
        case 27:
          return 15.27
        case 18:
        case 28:
          return 15.5
        case 29:
          return 15.41
        case 10:
        case 11:
        case 12:
        case 15:
        case 20:
        case 21:
        case 22:
        case 25:
        case 30:
        case 31:
          return 15
        default:
          return 0
      }
    }
  },
  watch: {
    fromMonth: function (from, to) {
      console.log('fromMonth', from, to)
    }
  },
  beforeMount: function () {
    this.calendar.startDate = new Date(this.fromMonth.substring(0, 4), this.fromMonth.substring(4), 0)
    this.calendar.endDate = new Date(this.toMonth.substring(0, 4), this.toMonth.substring(4), 0)

    for (let cursor = this.calendar.startDate; cursor <= this.calendar.endDate;) {
      const monthWidth = this.calendar.cellWidth * cursor.getDate()
      this.calendar.months.push({
        left: this.calendar.width,
        width: monthWidth,
        year: cursor.getFullYear(),
        month: cursor.getMonth() + 1,
        label: cursor.getFullYear() + '-' + this.parseMonthFormatter(cursor.getMonth() + 1)
      })
      this.calendar.days.push(...Array.from({ length: cursor.getDate() }, (v, k) => {
        const day = new Date(cursor.getFullYear(), cursor.getMonth(), k + 1)
        return {
          label: k + 1,
          width: this.calendar.cellWidth,
          textWidth: this.getTextWidth(k + 1),
          value: cursor.getFullYear() + '' + this.parseMonthFormatter(cursor.getMonth() + 1) + '' + this.parseDayFormatter(k + 1),
          color: day.getDay() === 0 ? 'red' : day.getDay() === 6 ? 'blue' : 'black',
          bgColor: day.getDay() === 0 || day.getDay() === 6 ? 'lightgrey' : 'transparent'
        }
      }))
      this.calendar.width += monthWidth
      cursor.setMonth(cursor.getMonth() + 2)
      cursor.setDate(0)
    }

    console.log(this.calendar.days)
  }
}
</script>

<style lang="scss" scoped>

</style>
