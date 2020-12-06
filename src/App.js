import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers'
import EmployeesList from './containers/employeesList/index'
import EmployeesBirthday from './containers/employeesBirthday'
import './App.css'

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <EmployeesList />
        <EmployeesBirthday />
      </div>
    </Provider>
  )
}

export default App
