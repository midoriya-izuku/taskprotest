import './App.css';
import {useEffect} from 'react'
import { Provider } from 'react-redux';
import store from './store';
import UsersList from './components/UsersList';
import { getUsers } from './actions/user'
import { getAccounts } from './actions/account';
function App() {
  useEffect(()=> {
    store.dispatch(getUsers())
    store.dispatch(getAccounts())
  },[])

  return (
    <Provider store={store}>
      <UsersList/>
    </Provider>
  )
}

export default App;
