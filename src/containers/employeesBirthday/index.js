import React from 'react'
import { connect } from 'react-redux'
import styles from './style.module.css'

const EmployeesBirthday = ({ selectedEmployees }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const transformDate = (date, months) => {
    const result = date.substring(0, date.indexOf('T')).split('-').reverse()
    result[0] = +result[0]
    result[1] = `${months[+result[1] - 1]},`
    result[2] += ' year'
    return result.join(' ')
  }

  const getMonth = (date) =>
    +date.substring(date.indexOf('-') + 1, date.lastIndexOf('-'))

  const groupByMonths = (list, month, index) => {
    const groupedList = [
      ...list.filter((item) => getMonth(item.dob) - 1 === index),
    ]
    return groupedList.length ? (
      <div key={month} className={styles.monthGroup}>
        <div className={styles.month}>{month}</div>
        <ul className={styles.employees}>
          {groupedList.map((item) => (
            <li key={item.id} className={styles.employee}>
              {item.lastName} {item.firstName} -{' '}
              {transformDate(item.dob, months)}
            </li>
          ))}
        </ul>
      </div>
    ) : null
  }

  return (
    <div className={styles.employeesBirthdayContainer}>
      <div className={styles.header}>Employees birthday</div>
      <hr className={styles.birtdayHr} />
      <div>
        {selectedEmployees.length > 0
          ? months.map((item, index) =>
              groupByMonths(selectedEmployees, item, index)
            )
          : 'No selected employees'}
      </div>
    </div>
  )
}

const mapStateToProps = ({ selectedEmployees }) => {
  return {
    selectedEmployees,
  }
}

export default connect(mapStateToProps)(EmployeesBirthday)
