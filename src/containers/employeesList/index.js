import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  setEmployeesList,
  selectEmployee,
  deselectEmployee,
} from '../../store/actions'
import './style.css'

const EmployeesList = ({
  employeesList,
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
    return (
      <div key={letter} className="letter-group">
        {letter}
        <div className="employees-group">
          {list.filter((item) => item.lastName[0] === letter).length ? (
            list
              .filter((item) => item.lastName[0] === letter)
              .map((item) => (
                <div key={item.id} className="employee">
                  {item.lastName} {item.firstName}
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={(event) => onChangeHandler(item, event)}
                  ></input>
                </div>
              ))
          ) : (
            <div className="employee">----</div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="employees">
      <div className="header">Employees</div>
      <div className="employees-container">
        {employeesList.length &&
          alphabet.map((item, index) =>
            groupEmployeesList(employeesList, item, index)
          )}
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
