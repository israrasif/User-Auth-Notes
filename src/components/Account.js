import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {startAccount} from '../action/actions'

const Account = (props) => {
    const dispatch = useDispatch()

    const token = useSelector((state) => {
        return state.userToken
    })
    const accountData = useSelector((state) => {
        return state.userDetails
    })    

    useEffect(() => {
        dispatch(startAccount(token))
    }, [])

    return (
        <div>
            <h3>user name- {accountData.username}</h3>
            <h3>email- {accountData.email}</h3>
        </div>
    )
}

export default Account