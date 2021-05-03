import React,{useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {startLogin, emptyRegister} from '../action/actions'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(emptyRegister)
    }, [])

    const handleChange = (e) => {
        const name = e.target.name

        if(name === 'email') {
            setEmail(e.target.value)
        }
        else if(name === 'password') {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            email: email,
            password: password
        }

        dispatch(startLogin(formData))
        props.history.push('/')
    }

    return(
        <div>
            <form onSubmit={handleSubmit} class='form-group'>
                <input 
                    class='form-control'
                    type='text' 
                    value={email} 
                    onChange={handleChange} 
                    name='email'
                    placeholder='email'
                    /> <br />
                <input 
                    class='form-control'
                    type='text' 
                    value={password} 
                    onChange={handleChange} 
                    name='password'
                    placeholder='password'
                    /> <br />
                <button class='btn btn-success' type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Login