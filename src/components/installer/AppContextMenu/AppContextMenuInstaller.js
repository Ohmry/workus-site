import AppContextMenu from './AppContextMenu'
import { AppContextMenuEvents } from '@/components/installer/events'

export default {
  install (Vue) {
    if (this.installed === true) return
    this.installed = true

    Vue.component('AppContextMenu', AppContextMenu)

    const contextmenu = (e, params) => {
      if (!(e instanceof PointerEvent)) {
        const caughtType = e.constructor.name
        throw new Error(
          `e type must be an PointerEvnet. Caught: ${caughtType}. Excepted: PointerEvent`
        )
      }

      if (params) {
        if (typeof params !== 'object' || Array.isArray(params)) {
          throw new Error('Options type must be an object. Caught: array. Expected: object')
        } else if (typeof params === 'object') {
          if (Object.prototype.hasOwnProperty.call(params, 'callback') && typeof params.callback !== 'function') {
            const callbackType = typeof params.callback
            throw new Error(
              `Callback type must be an function. Caught: ${callbackType}. Expected: function`
            )
          }
        }
      }
      AppContextMenuEvents.$emit('open', e, params)
    }

    contextmenu.close = () => {
      AppContextMenuEvents.$emit('close')
    }

    Vue.prototype.$contextmenu = contextmenu
    Vue.$contextmenu = contextmenu
  }
}
