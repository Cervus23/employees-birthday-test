import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setEmployeesList } from '../../store/actions'
import './style.css'

const EmployeesList = ({ employeesList, setEmployeesList }) => {
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

  return (
    <div>
      {employeesList.length &&
        employeesList.map((item) => (
          <div key={item.id}>
            {item.lastName} {item.firstName}
          </div>
        ))}
    </div>
  )
}

const mapStateToProps = ({ employeesList }) => {
  return {
    employeesList,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmployeesList: (employeesList) => {
    dispatch(setEmployeesList(employeesList))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList)
