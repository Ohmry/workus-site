import DateUtils from './DateUtils'

export default {
  parseFromDate: function (dateValue, format) {
    if (dateValue.constructor !== Date) {
      console.error('dateValue must be Date. actual: ' + dateValue.constructor.name)
      return dateValue
    }

    switch (format) {
      case 'yyyy-MM-dd':
        return dateValue.getFullYear() + '-' + DateUtils.getMonthWithPad(dateValue) + '-' + DateUtils.getDayWithPad(dateValue)
      default:
        return dateValue
    }
  },
  parseFromString: function (stringValue, format) {
    if (stringValue.constructor !== String) {
      console.error('stringValue must be String. actual: ' + stringValue.constructor.name)
      return stringValue
    }

    switch (format) {
      case 'yyyy-MM-dd':
        return stringValue.substring(0, 4) + '-' + stringValue.substring(4, 6) + '-' + stringValue.substring(6, 8)
      default:
        return stringValue
    }
  }
}
