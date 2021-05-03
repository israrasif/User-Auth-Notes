import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {startNotes, startDeleteNote} from '../action/actions'

const NotesList = (props) => {
    const dispatch = useDispatch()

    const token = useSelector((state) => {
        return state.userToken
    }) 
    const notes = useSelector((state) => {
        return state.notes
    })

    useEffect(() => {
        dispatch(startNotes(token))
    }, [])

    return (
        <div>
            <h3>Notes List</h3>
            <h4>Total Notes - {notes.length}</h4>
            <ul>
                {notes.map((ele) => {
                    return (
                            <li 
                                key={ele._id}>
                                    {ele.title} - 
                                    {ele.body}
                                <button 
                                    class='btn btn-danger' 
                                    style={{ marginBottom: '3px'}}
                                    onClick={
                                    () => {
                                        dispatch(startDeleteNote(ele._id, token))
                                    }
                                }>x</button>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NotesList