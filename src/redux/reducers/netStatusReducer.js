import { CHANGE_NETWORK_STATUS } from 'redux/actions/netStatus'

const initState = false

export default function (state = initState, action) {
  switch (action.type) {
    case CHANGE_NETWORK_STATUS:
      return window.navigator.onLine
    default:
      return state
  }
}
