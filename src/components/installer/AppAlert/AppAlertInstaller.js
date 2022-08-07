import AppAlert from './AppAlert'
import { AppAlertEvents } from '@/components/installer/events'

export default {
  install (Vue) {
    if (this.installed === true) return
    this.installed = true

    Vue.component('AppAlert', AppAlert)

    const alert = (params) => {
      if (typeof params !== 'object' || Array.isArray(params)) {
        let caughtType = typeof params
        if (Array.isArray(params)) caughtType = 'array'

        throw new Error(
          `Options type must be an object. Caught: ${caughtType}. Expected: object`
        )
      }

      if (typeof params === 'object') {
        if (
          Object.prototype.hasOwnProperty.call(params, 'callback') &&
          typeof params.callback !== 'function'
        ) {
          const callbackType = typeof params.callback
          throw new Error(
            `Callback type must be an function. Caught: ${callbackType}. Expected: function`
          )
        }
        AppAlertEvents.$emit('open', params)
      }
    }

    alert.close = () => {
      AppAlertEvents.$emit('close')
    }

    Vue.prototype.$alert = alert
    Vue.$alert = alert
  }
}
