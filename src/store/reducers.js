import {
  SET_EMPLOYEES_LIST,
  SELECT_EMPLOYEE,
  DESELECT_EMPLOYEE,
} from './actions'

const initialState = {
  employeesList: [],
  selectedEmployees: [],
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_EMPLOYEES_LIST:
      return { ...state, employeesList: payload }
    case SELECT_EMPLOYEE:
      return {
        ...state,
        selectedEmployees: [...state.selectedEmployees, payload],
      }
    case DESELECT_EMPLOYEE:
      return {
        ...state,
        selectedEmployees: [
          ...state.selectedEmployees.filter((item) => item.id !== payload.id),
        ],
      }
    default:
      return { ...state }
  }
}

export default reducer
