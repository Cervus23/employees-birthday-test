import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers'
import EmployeesList from './components/employeesList/index'
import './App.css'

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <EmployeesList />
      </div>
    </Provider>
  )
}

export default App
