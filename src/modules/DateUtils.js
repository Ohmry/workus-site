export default {
  getTodayValue: function () {
    const today = new Date()
    return today.getFullYear() + this.getMonthWithPad(today) + this.getDayWithPad(today)
  },
  getMonthWithPad: function (date) {
    const month = date.getMonth() + 1
    return month < 10 ? '0' + month : month
  },
  getDayWithPad: function (date) {
    const day = date.getDate()
    return day < 10 ? '0' + day : day
  }
}
