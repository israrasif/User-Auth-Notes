import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {startRegister} from '../action/actions'

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const name = e.target.name

        if(name === 'username') {
            setUsername(e.target.value)
        }
        else if(name === 'email') {
            setEmail(e.target.value)
        }
        else if(name === 'password') {
            setPassword(e.target.value)
        }
    }

    const state = useSelector((state) => {
        return state.registered
    }) 

    console.log(state)

    if(state.length) {
        props.history.push('/login')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            username : username,
            email: email,
            password: password
        }
        dispatch(startRegister(formData))
    }

    return (
        <div>
            <h2>Register with us</h2>
            <form onSubmit={handleSubmit} class='form-group'>
                <input 
                    class='form-control'
                    type='text' 
                    value={username} 
                    onChange={handleChange} 
                    name='username'
                    placeholder='username'
                    /> <br />
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
                <button type='submit' class='btn btn-success'>submit</button>
            </form>
        </div>
    )
}

export default Register