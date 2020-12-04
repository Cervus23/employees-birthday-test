import React, { useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setEmployeesList } from '../../store/actions'
import './style.css'

const EmployeesList = ({ employeesList, setEmployeesList }) => {
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

  // {
  //   list
  //     .filter((item) => item.lastName[0] === letter)
  //     .map((item) => (
  //       <div key={item.id}>
  //         {item.lastName} {item.firstName}
  //       </div>
  //     ))
  // }

  const groupEmployeesList = (list, letter) => {
    return (
      <div key={letter} className="letterGroup">
        {letter}
        <div className="employeesGroup">
          {list.filter((item) => item.lastName[0] === letter).length ? (
            list
              .filter((item) => item.lastName[0] === letter)
              .map((item) => (
                <div key={item.id} className="employee">
                  {item.lastName} {item.firstName}
                  <input type="checkbox"></input>
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
    <div className="employeesContainer">
      {employeesList.length &&
        alphabet.map((item, index) =>
          groupEmployeesList(employeesList, item, index)
        )}
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
