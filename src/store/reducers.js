import { SET_EMPLOYEES_LIST } from './actions'

const initialState = {
  employeesList: [],
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_EMPLOYEES_LIST:
      return { ...state, employeesList: payload }
    default:
      return { ...state }
  }
}

export default reducer
