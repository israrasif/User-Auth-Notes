import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import NotesList from './NotesList'
import {startAddNote} from '../action/actions'

const MyNotes = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const token = useSelector((state) => {
        return state.userToken
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const attr = e.target.name

        if(attr === 'title') {
            setTitle(e.target.value)
        }
        else if (attr === 'body') {
            setBody(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            title: title, 
            body: body
        }
        dispatch(startAddNote(formData, token))
        props.history.push('/myNotes')
    }

    return (
        <div>
            <h2>My Notes</h2>
            <h3>Add note</h3>
            <form onSubmit={handleSubmit}>
                <div class='form-group'>
                    <input 
                        class='form-control'
                        type='text' 
                        value={title} 
                        onChange={handleChange}
                        name = 'title'
                        placeholder = 'title'
                        /> <br />
                    <textarea
                        class='form-control'
                        type='textarea' 
                        value={body} 
                        onChange={handleChange} 
                        name = 'body'
                        placeholder = 'note body'
                        /> <br />
                    <button class='btn btn-success' type='submit'>save</button>
                </div>
            </form>

            <NotesList />
        </div>
    )
}

export default MyNotes