export const SET_EMPLOYEES_LIST = 'SET_EMPLOYEES_LIST'
export const SELECT_EMPLOYEE = 'SELECT_EMPLOYEE'
export const DESELECT_EMPLOYEE = 'DESELECT_EMPLOYEE'

export const setEmployeesList = (payload) => ({
  type: SET_EMPLOYEES_LIST,
  payload,
})

export const selectEmployee = (payload) => ({
  type: SELECT_EMPLOYEE,
  payload,
})

export const deselectEmployee = (payload) => ({
  type: DESELECT_EMPLOYEE,
  payload,
})
