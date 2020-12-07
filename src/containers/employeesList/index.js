import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  setEmployeesList,
  selectEmployee,
  deselectEmployee,
} from '../../store/actions'
import styles from './style.module.css'

const EmployeesList = ({
  employeesList,
  selectedEmployees,
  setEmployeesList,
  selectEmployee,
  deselectEmployee,
}) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  useEffect(() => {
    if (employeesList.length === 0) {
      ;(async () => {
        const result = await axios(
          'https://yalantis-react-school-api.yalantis.com/api/task0/users'
        )
        setEmployeesList(result.data)
      })()
    }
  }, [setEmployeesList, employeesList])

  const onChangeHandler = (employee, event) => {
    return event.target.checked
      ? selectEmployee(employee)
      : deselectEmployee(employee)
  }

  const groupEmployeesList = (list, letter) => {
    const groupedList = [
      ...list
        .sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
        .filter((employee) => employee.lastName[0] === letter),
    ]
    return (
      <div key={letter} className={styles.letterGroup}>
        <div className={styles.letter}>{letter}</div>
        <div className={styles.employeesGroup}>
          {groupedList.length ? (
            groupedList.map((employee) => (
              <div key={employee.id} className={styles.employee}>
                {employee.lastName} {employee.firstName}
                <input
                  type="checkbox"
                  checked={selectedEmployees.reduce((acc, item) => {
                    if (item.id === employee.id) acc += 1
                    return acc
                  }, 0)}
                  className={styles.checkbox}
                  onChange={(event) => onChangeHandler(employee, event)}
                />
              </div>
            ))
          ) : (
            <div className={styles.employee}>----</div>
          )}
        </div>
      </div>
    )
  }
  return (
    <div className={styles.main}>
      <div className={styles.header}>Employees</div>
      <div className={styles.employeesContainer}>
        {employeesList.length
          ? alphabet.map((letter) => groupEmployeesList(employeesList, letter))
          : null}
      </div>
    </div>
  )
}

const mapStateToProps = ({ employeesList, selectedEmployees }) => {
  return {
    employeesList,
    selectedEmployees,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmployeesList: (employeesList) => {
    dispatch(setEmployeesList(employeesList))
  },
  selectEmployee: (employee) => {
    dispatch(selectEmployee(employee))
  },
  deselectEmployee: (employee) => {
    dispatch(deselectEmployee(employee))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList)
