import {createSlice} from '@reduxjs/toolkit'
import order from '../services/order'

const orderSlice = createSlice({
    name: 'order',
    initialState :{ orders: [], count:0},
    reducers:{
        setData: (state, action) => {
            return {...state,...action.payload}
        }
    }

})

export const getOrders = payload =>  async dispatch =>  {
    console.log("🚀 ~ file: order.js:16 ~ getOrders ~ payload:", payload)
    try {
        let {items,totalCount, pageSize, pageNumber } =
        await  order.getOrders(payload)
        dispatch(setData({orders: items, count: totalCount }))
    } catch (error) {
           console.error(error); 
    }
}


export const {setData}  = orderSlice.actions
export default orderSlice.reducer