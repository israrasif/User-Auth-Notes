import React from 'react'
import {Link, Route, withRouter} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

import {logout} from './action/actions'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Account from './components/Account'
import MyNotes from './components/MyNotes'

const App = (props) => {
  const dispatch = useDispatch()

  const token = useSelector((state) => {
    return state.userToken
  })
  console.log(token)

  return (
    <div class='container'>
      <h1>User Auth - Redux</h1>
      <ul>
        <li class='btn btn-warning' style={{margin : '5px'}}><Link to='/'>Home</Link></li>
        {!token.length ? 
          (<>{/*shortcut for react.fragment*/}
            <li class='btn btn-warning'  style={{margin : '5px'}}><Link to='/register'>Register</Link></li>
            <li class='btn btn-warning' style={{margin : '5px'}}><Link to='/login'>Login</Link></li>
          </>) : (
            <React.Fragment>
              <li class='btn btn-warning' style={{margin : '5px'}}><Link to='/account'>Account</Link></li>
              <li class='btn btn-warning' style={{margin : '5px'}}><Link to='/myNotes'>My Notes</Link></li>
              <li class='btn btn-warning' style={{margin : '5px'}}><Link to='/' onClick={() => {
                props.history.push('/')
                dispatch(logout)
                alert('user logged out')
              }}
              >Logout</Link></li>
            </React.Fragment>
          )
        }
      </ul>

      <Route path='/' component={Home} exact={true}/> 
      <Route path='/register' component={Register}/> 
      <Route path='/login' component={Login}/> 
      <Route path='/account' component={Account}/>
      <Route path='/myNotes' component={MyNotes}/>
    </div> 
  )
}

export default withRouter(App)