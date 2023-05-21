import {createSlice} from '@reduxjs/toolkit'
import auth from '../services/auth'

const authSlice =  createSlice({
    name: 'auth',
    initialState: {loggedIn: false, user: {}, message: '' },
    reducers: {
        setData (state, action){
            return {...state, ...action.payload}
        }
    }



})

export const login = payload=> async dispatch =>{
    try {
        let {data: {user, accessToken:{token}}, message} =  await auth.loginAuth(payload)
       
        if(message === 'Logged in successfully'){
            localStorage.setItem('token', token)
            dispatch(setData({loggedIn: true, user}))

        } else dispatch(setData({message}))
    } catch (error) {
        dispatch(setData({message:'User not found'}))
    }
}
export const {setData}  = authSlice.actions
export default authSlice.reducer