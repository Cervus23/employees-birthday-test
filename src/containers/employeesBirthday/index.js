import React from 'react'
import { connect } from 'react-redux'
import './style.css'

const EmployeesBirthday = ({ selectedEmployees }) => {
  return (
    <div className="employees-birthday-container">
      <div className="header">Employees birthday</div>
      <div>
        {selectedEmployees.length &&
          selectedEmployees.map((item) => (
            <div key={item.id}>
              {item.lastName}
              {item.firstName}
            </div>
          ))}
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

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesBirthday)
