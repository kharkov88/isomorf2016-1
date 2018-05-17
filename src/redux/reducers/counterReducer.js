import { INCREMENT } from 'redux/actions/counter'

const initState = { value: 0 }

export default function (state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1}
    default:
      return state
  }
}
