import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers'
import EmployeesList from './containers/employeesList/index'
import EmployeesBirthday from './containers/employeesBirthday'
import styles from './App.module.css'

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <EmployeesList />
        <EmployeesBirthday />
      </div>
      <hr className={styles.appHr} />
    </Provider>
  )
}

export default App
