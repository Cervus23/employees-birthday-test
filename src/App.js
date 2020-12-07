import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers'
import EmployeesList from './containers/employeesList/index'
import EmployeesBirthday from './containers/employeesBirthday'
import styles from './App.module.css'

const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state)

    window.localStorage.setItem('app_state', serialisedState)
  } catch (err) {
    console.log(err)
  }
}

const loadState = () => {
  try {
    const serialisedState = window.localStorage.getItem('app_state')

    if (!serialisedState) return undefined

    return JSON.parse(serialisedState)
  } catch (err) {
    return undefined
  }
}

const oldState = loadState()

const store = createStore(reducers, oldState)

store.subscribe(() => {
  saveState(store.getState())
})

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
